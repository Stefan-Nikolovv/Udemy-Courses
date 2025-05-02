FROM node:14

ARG DEFAULT_PORT=80

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

#Anoniums volume to resolve problem with node_modules
# that should look likes 
# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
