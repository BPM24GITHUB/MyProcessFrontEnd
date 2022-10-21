#the latest recomended verson for users on nodejs.org is 16.17;

FROM node:16.18.0-buster

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install 

COPY . .

#RUN npm run build

# we tell the container to expose the port he should expose
EXPOSE 3000


CMD ["npm","run","start"]
