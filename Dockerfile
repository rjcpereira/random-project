FROM node:18-alpine

RUN npm install -g http-server

WORKDIR /app

ENV NODE_ENV='production'

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "http-server", "-p 3000", "dist" ]