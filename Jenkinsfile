#!/bin/bash
#            _                 _       _
#           | |               | |     | |
#   __ _  __| | __ _ _ __ ___ | | ____| | ___  __ _ _ __
#  / _` |/ _` |/ _` | '_ ` _ \| |/ / _` |/ _ \/ _` | '_ \
# | (_| | (_| | (_| | | | | | |   < (_| |  __/ (_| | | | |
#  \__,_|\__,_|\__,_|_| |_| |_|_|\_\__,_|\___|\__,_|_| |_|
#
#  Copyright 2020, Adam K Dean <adamkdean@googlemail.com>

CONTAINER_NAME="ip-adamkdean-co-uk"
IMAGE_NAME="ip.adamkdean.co.uk"
HOSTNAME="ip.adamkdean.co.uk"

# First, build the new image
docker build -t $IMAGE_NAME .

# Next, stop and remove the old image
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Finally, run the new image
docker run \
  --detach \
  --restart always \
  --name $CONTAINER_NAME \
  --network core-network \
  --expose 8000 \
  --env HTTP_PORT=8000 \
  --env NODE_ENV=production \
  --env VIRTUAL_HOST=$HOSTNAME \
  --env LETSENCRYPT_HOST=$HOSTNAME \
  --env LETSENCRYPT_EMAIL="adamkdean@googlemail.com" \
  $IMAGE_NAME
