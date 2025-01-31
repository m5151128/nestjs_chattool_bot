FROM node:22.13

WORKDIR /usr/src/app

COPY ./slack-app/package*.json /usr/src/app/
RUN npm install

COPY ./slack-app /usr/src/app/
RUN npm run build

CMD ["npm", "run", "start:dev"]
