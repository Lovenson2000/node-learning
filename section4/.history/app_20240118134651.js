const fs = require('fs');
const express = require('express');

const app = express();

// Handling get request to our API
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));


const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
})