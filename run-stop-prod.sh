#!/bin/sh

IMAGE_NAME=pract-graph
CONTAINER_NAME=pract-graph_container

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker rmi -f $IMAGE_NAME
