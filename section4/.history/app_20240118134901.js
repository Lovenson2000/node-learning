const fs = require('fs');
const express = require('express');

const app = express();

// Handling get request to our API
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get('api/v1/tours', (req, res) => {

    res.status(200)
    res.json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
})