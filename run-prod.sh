#!/bin/sh

IMAGE_NAME=pract-graph
CONTAINER_NAME=pract-graph_container

docker build -t $IMAGE_NAME .
docker run -d --restart unless-stopped -p 3030:3000 --name $CONTAINER_NAME $IMAGE_NAME
