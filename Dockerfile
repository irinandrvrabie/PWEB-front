FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

CMD ["npm", "install"]

COPY . .

EXPOSE 3000

# CMD ["npm", "install"]

CMD ["npm", "run", "start"]
