FROM python:alpine
WORKDIR /app

# ADD http://127.0.0.1:3333/uploads/main.py /app/
COPY . /app/

CMD "./start.sh" 

# docker build -f python.Dockerfile -t python:codepass .