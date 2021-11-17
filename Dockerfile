
FROM node:16.6.1-buster

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  wget \
  mc \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install
RUN npm install -g npm@latest
RUN npm install @adiwajshing/b..aileys

COPY . ....

EXPOSE 5000

CMD ["npm", "start"]`
