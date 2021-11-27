FROM node:latest

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm i
CMD ["node", "index.js"]

EXPOSE 8080