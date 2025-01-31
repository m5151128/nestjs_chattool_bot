FROM node:22.13

WORKDIR /usr/src/app

COPY ./nestjs-app/package*.json .
RUN npm install

COPY ./nestjs-app .
RUN npm install -g @nestjs/cli@11.0.2

CMD ["npm", "run", "start:dev"]
