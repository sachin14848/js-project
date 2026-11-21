const http = require('http');
const route = require('./route')

route.anotherFunction()
const server = http.createServer(route.handler)

server.listen(5000, ()=> {
    console.log('Server is running on port 5000');
})