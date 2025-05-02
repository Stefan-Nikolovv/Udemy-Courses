FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

#Anoniums volume to resolve problem with node_modules
# that should look likes 
# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
