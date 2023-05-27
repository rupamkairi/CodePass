FROM node:alpine
WORKDIR /app

ENV SOURCE=""
ENV TEST=""

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD "./start.sh" 

# docker build -f javascript.Dockerfile -t javascript:codepass .