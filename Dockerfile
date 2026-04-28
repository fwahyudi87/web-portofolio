FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install --only=production

COPY server.js .
COPY portfolio ./portfolio
COPY fwi_porto_image.png .

EXPOSE 3000

CMD ["node", "server.js"]