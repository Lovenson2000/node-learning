const fs = require('fs');
const express = require('express');

const app = express();

// Handling get request to our API
const tours = fs.readdirSync(`${__dirname}/dev-data/data/tours-s`)


const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
})