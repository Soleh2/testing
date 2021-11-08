FROM node:16.13.0

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg \
  wget \
  chromium \ 
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install
RUN npm install -g npm@latest
RUN npm install @adiwajshing/baileys
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY r5nhytflswo1ly3
ENV PM2_SECRET_KEY cygkc3bz1dww20f

COPY . .
EXPOSE 5000

CMD ["npm", "start"]`
