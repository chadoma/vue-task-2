FROM node:lts-alpine

ENV NODE_ENV=develop

WORKDIR /usr/src/app/

RUN npm install && npm install -g @vue/cli \
    && npm cache clean --force

COPY . .