FROM        node:16-alpine as development-stage
WORKDIR     /app
COPY        package*.json .
COPY        tsconfig*.json .
COPY        ./tools/wait-for-it.sh .
COPY        ./tools/docker-entrypoint.sh .  
RUN         npm ci   
COPY        --chown=node:node . .

RUN         apk add --no-cache bash
RUN         chmod +x ./wait-for-it.sh ./docker-entrypoint.sh
ENTRYPOINT  ["docker-entrypoint.sh"]

FROM        node:16-alpine as build-stage
WORKDIR     /app
COPY        --from=development-stage /app .
RUN         npm run build

FROM        node:16-alpine as production-stage
ARG         NODE_ENV=production
ENV         NODE_ENV=${NODE_ENV}
WORKDIR     /app
COPY        package*.json .
RUN         npm ci --only=production
COPY        --from=build-stage /app/dist ./dist

CMD         [ "node", "dist/index.js" ]