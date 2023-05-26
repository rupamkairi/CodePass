FROM python:alpine
WORKDIR /app

ENV SOURCE=""
ENV TEST=""

COPY . /app/

CMD "./start.sh" 

# docker build -f python.Dockerfile -t python:codepass .