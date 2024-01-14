const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

/////////////////////////////
// FILES

// Blocking, Synchronous way
// const textIn = fs.readFileSync('./txt/final.txt', 'utf-8');
// const textOut = `This is what we have so far about the Avocado: ${textIn}.\n Written by Blatter on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File has been written");

// Non-blocking, Asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//     });
// });

// console.log("Will read file");



/////////////////////////////
// SERVER

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview Page
    if (pathName === "/" || pathName === "/overview") {
        res.writeHead(200, {
            "Content-type": "text/html",
        });
        res.end(tempOverview);
        
    //Product Page
    } else if (pathName === "/product") {
        res.end("This is the PRODUCT...");
    //API
    } else if (pathName === "/api") {
        res.writeHead(200, {
            "Content-type": "application/json",
        });
        res.end(data);

    //Not found page
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "header": "myHeader"
        });
        res.end("<h1>Page not found</h1>");
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Server listening to request on port 8000");
});