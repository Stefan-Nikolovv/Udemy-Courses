FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 80

EXPOSE $PORT

#Anoniums volume to resolve problem with node_modules
# that should look likes 
# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
