from typing import Union
from fastapi import FastAPI
import docker
import os


app = FastAPI()

print(os.path.abspath("./app"))
# /Users/rupamkairi/Projects/CodePass/codepass-docker-api/app


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/docker")
def read_docker():
    client = docker.from_env()
    output = client.containers.run("alpine", ["echo", "Hello", "World"])
    return output


@app.get("/docker/python")
def read_docker_python():
    client = docker.from_env()
    output = client.containers.run(
        # name="python-codepass",
        image="python:codepass",
        working_dir="/app",
        environment=[
            "SOURCE=https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/main.py",
            "TEST=https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/test.py",
        ],
        # remove=True,
    )
    return output
