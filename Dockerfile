FROM node:latest as base

RUN mkdir -p /app
COPY . /app
WORKDIR /app

#COPY app/package*.json ./
# Testing
FROM base as test
COPY . .
CMD [ "npm", "run", "test" ]

RUN npm i
CMD ["node", "index.js"]