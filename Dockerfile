FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY babel.config.js ./
COPY jsconfig.json ./
COPY vue.config.js ./
COPY yarn.lock ./
COPY public/ ./public
COPY src/ ./src

RUN yarn install

RUN yarn run build

EXPOSE 8080

CMD [ "yarn", "run", "serve" ]