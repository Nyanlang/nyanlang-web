# NextJS Deploy
FROM node:19.3.0-alpine3.16

WORKDIR /app

COPY ./package*.json /app

RUN npm install

# Bundle app source
COPY ./ /app/

EXPOSE 3000

RUN ["npm", "run", "build"]

ENTRYPOINT ["npm", "run", "start"]
