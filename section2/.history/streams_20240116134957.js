
const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('test-file.txt', (err, data) => {
        
    })
})