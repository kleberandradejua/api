FROM ghcr.io/puppeteer/puppeteer:22.11.2

ENV PUPPERTEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPERTEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable
    
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "app.js"]