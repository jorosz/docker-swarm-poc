FROM java:8-jre-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY target/ui-backend-0.0.1-SNAPSHOT.jar /usr/src/app

CMD [ "java", "-jar", "ui-backend-0.0.1-SNAPSHOT.jar", "--server.port=80"]
EXPOSE 80
