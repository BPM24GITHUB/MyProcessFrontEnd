#the latest recomended verson for users on nodejs.org is 16.17;

FROM node:16.17.0-alpine3.15

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

#RUN npm run build

# we tell the container to expose the port he should expose
EXPOSE 3000


CMD ["npm","start"]
