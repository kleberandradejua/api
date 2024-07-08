FROM ghcr.io/pupperteer/pupperteer:19.7.2

# We don't need the standalone Chromium
ENV PUPPERTEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPERTEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable
    
# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm ci
# COPY . .
# CMD ["node", "app.js"]


#FROM node:slim

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

 WORKDIR /usr/src/app

 COPY package*.json ./
 RUN npm i
 COPY . .
 CMD ["node", "index"]