FROM node:alpine

WORKDIR /usr/app/

COPY package*.json ./

COPY ./src/ .

RUN npm install

EXPOSE 8083

CMD ["npm", "start"]