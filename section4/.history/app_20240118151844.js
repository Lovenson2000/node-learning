const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); //middleware


// Handling get request for all tours

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

//Handling request for one single tour (by id)

app.get('/api/v1/tours/:id', (req, res) => {
 
    const id = req.params.id * 1;
    const tour = tours.find(tour => tour.id === id);
    
    if(id > tours.length) {
        res.status(404).json({
            status: 'failed',
            message: 'Invalid ID'
        });
    }

    res.status(200);
    res.json({
        status: 'success',
        data: {
            tour
        }
    });
});

//Handling post request to our api

app.post('/api/v1/tours', (req, res) => {

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
})