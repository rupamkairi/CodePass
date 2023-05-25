from django.shortcuts import render
from django.http import HttpResponse
import docker


# Create your views here.
def index(request):
    client = docker.from_env()
    print(client.containers.run("alpine", ["echo", "hello", "world"]))
    return HttpResponse("Hello, world. You're at the polls index.")
