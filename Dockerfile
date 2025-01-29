FROM node:22.13

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli@11.0.2
