from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import docker


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/docker")
def read_docker():
    client = docker.from_env()
    output = client.containers.run("alpine", ["echo", "Hello", "World"])
    return output


class Body(BaseModel):
    source: str
    test: str


@app.post("/docker/python")
def read_docker_python(body: Body):
    client = docker.from_env()
    print(body.source, body.test)
    output = client.containers.run(
        # name="python-codepass",
        image="python:codepass",
        working_dir="/app",
        environment=[
            "SOURCE=" + body.source,
            "TEST=" + body.test,
        ],
        stdout=True,
        stderr=True,
        remove=True,
    )
    return output
