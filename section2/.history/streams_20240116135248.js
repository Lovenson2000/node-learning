
const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
    //Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // });
    //Solution 2: using Streams
})

server.listen(8000,'127.0.0.1', () => {
    console.log("Server Listening to Request...");
})