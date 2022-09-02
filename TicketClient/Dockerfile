FROM    node:16-alpine as development-stage
WORKDIR /app

COPY    package*.json ./
RUN     npm ci
COPY        --chown=node:node . .

FROM        node:16-alpine as build-stage
WORKDIR     /app
COPY        --from=development-stage /app .
RUN         npm run build

FROM    nginx:1.21-alpine as production-stage
WORKDIR /usr/share/nginx/html

RUN     rm -rf ./*
COPY    nginx.conf /etc/nginx/nginx.conf
COPY    --from=build-stage /app/dist/TicketClient .
CMD     ["nginx", "-g", "daemon off;"]