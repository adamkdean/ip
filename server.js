//            _                 _       _
//           | |               | |     | |
//   __ _  __| | __ _ _ __ ___ | | ____| | ___  __ _ _ __
//  / _` |/ _` |/ _` | '_ ` _ \| |/ / _` |/ _ \/ _` | '_ \
// | (_| | (_| | (_| | | | | | |   < (_| |  __/ (_| | | | |
//  \__,_|\__,_|\__,_|_| |_| |_|_|\_\__,_|\___|\__,_|_| |_|
//
//  Copyright 2020, Adam K Dean <adamkdean@googlemail.com>

const express = require('express')
const app = express()
const port = process.env.HTTP_PORT || 8000

app.use((req, res, next) => {
  const ipaddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  res.header('Content-Type', 'text/plain')
  res.send(ipaddr)
})

app.listen(port, () => console.log(`[ip] listening on ${port}`))
