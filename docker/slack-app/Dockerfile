FROM node:22.13

WORKDIR /usr/src/app

COPY ./slack-app/package*.json .
RUN npm install

COPY ./slack-app .
RUN npm run build

CMD ["npm", "run", "start:dev"]
