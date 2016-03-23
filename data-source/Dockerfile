FROM python:2.7-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY server.py /usr/src/app

EXPOSE 80
CMD ["/usr/local/bin/python", "server.py"]
