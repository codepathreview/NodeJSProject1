"use strict";
console.log('Starting the echo server')
let http = require('http')

http.createServer((req, res) => {
    console.log('Request received for echo serverat: ${req.url} ')
    //res.end('hello world\n')
    req.pipe(res)
}).listen(8080)
