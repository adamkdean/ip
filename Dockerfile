#            _                 _       _
#           | |               | |     | |
#   __ _  __| | __ _ _ __ ___ | | ____| | ___  __ _ _ __
#  / _` |/ _` |/ _` | '_ ` _ \| |/ / _` |/ _ \/ _` | '_ \
# | (_| | (_| | (_| | | | | | |   < (_| |  __/ (_| | | | |
#  \__,_|\__,_|\__,_|_| |_| |_|_|\_\__,_|\___|\__,_|_| |_|
#
#  Copyright 2020, Adam K Dean <adamkdean@googlemail.com>

FROM node:lts
MAINTAINER Adam K Dean <adamkdean@googlemail.com>

WORKDIR /www

COPY package*.json ./
RUN npm install

COPY server.js .

CMD ["npm", "start"]
