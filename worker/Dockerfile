FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json *.js /usr/src/app/
ARG PROXY

RUN echo $HTTP_PROXY; npm config set https-proxy ${PROXY} && \
    npm config set proxy ${PROXY} && \
    npm install

CMD [ "npm", "start" ]
