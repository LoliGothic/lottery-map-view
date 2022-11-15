FROM node:18.12.1-alpine

WORKDIR /app
COPY ./src /app

RUN npm install

USER node