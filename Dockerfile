FROM node:18.16.1-alpine3.18

COPY package*.json .

RUN npm i --omit=dev

COPY . .

EXPOSE 9090

CMD ["node", "server.js"]