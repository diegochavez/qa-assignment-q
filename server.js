// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./car-api/db.json')
// const middlewares = jsonServer.defaults({static: './build', delay: 1000})

server.use(router)
// server.use(middlewares)
server.listen(3000, () => {
  console.log('Application is running')
})