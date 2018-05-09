FROM node:alpine

MAINTAINER Alex Friedrichsen <afriedrichsen@me.com>

ENV NODE_ENV=production
ENV MONGO_URI=http://mongodb:127017/iam-a-messenger
ENV MONGO_URI_TESTS=mongodb://localhost:27017/iam-a-messenger
ENV PORT=2112
ENV DOCKER_FLAG=docker_prod

# Update
RUN apk add --update nodejs

WORKDIR /app

ADD . /app
# RUN node -v

RUN cd /app; npm install --production

EXPOSE 2112

CMD [ "npm","start"]