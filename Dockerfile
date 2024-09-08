FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY config.json /app/config.json

EXPOSE 10000

RUN npm run build

CMD ["npm", "start"]