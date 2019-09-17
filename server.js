// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./car-api/db.json')
const middlewares = jsonServer.defaults({static: './build', delay: 10000})

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('Application is running')
})