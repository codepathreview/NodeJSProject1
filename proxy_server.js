"use strict";
console.log('Starting the server')

// All require calls go at the top of index.js
let http = require('http')
let request = require('request')
// Place near the top of your file, just below your other requires 
// Set a the default value for --host to 127.0.0.1
let argv = require('yargs')
    .default('host', '127.0.0.1:8000')
    .argv
let scheme = 'http://'
// Build the destinationUrl using the --host value
let destinationUrl = scheme + argv.host

http.createServer((req, res) => {
    // Proxy code
    let options = {
        headers: req.headers,
        url: 'http://${destinationUrl}${req.url}'
    }
    request(options)
}).listen(8001)

