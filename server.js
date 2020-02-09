const express = require('express')
const staticServe = require('serve-static')
history = require('connect-history-api-fallback')

const port = 5000

const server = express()

server.use(history())
server.use(staticServe('./dist'))

server.listen(port)
