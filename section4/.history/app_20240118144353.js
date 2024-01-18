const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); //middleware


// Handling get request to our API

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {

    res.status(200);
    res.json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
    });
});

//Handling post request to our api

app.post('/api/v1/tours', (req, res) => {

    const newId = tours[length - 1] + 1;
    const newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);
    
    res.send("Sent request data...");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
})