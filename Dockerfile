FROM ghcr.io/pupperteer/pupperteer:21.6.0

# We don't need the standalone Chromium
ENV PUPPERTEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPERTEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable    

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update && apt-get install -y google-chrome-stable --no-install-recommends


WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
COPY . .
CMD ["node", "app.js"]