FROM node:18.12.1-alpine

WORKDIR /app

COPY ./src/package*.json ./
RUN npm install

USER node