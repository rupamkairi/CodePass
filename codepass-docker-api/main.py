from typing import Union
from fastapi import FastAPI
import docker
import os


app = FastAPI()


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
    app_path = os.path.abspath("./app")
    output = client.containers.run(
        # name="python-codepass",
        image="python:alpine",
        working_dir="/app",
        volumes={app_path: {"bind": "/app", "mode": "rw"}},
        command=["./start.sh"],
        remove=True,
    )
    return output
