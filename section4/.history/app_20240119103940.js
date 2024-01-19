const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); //middleware




const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
// Handling get request for all tours
const getAllTours = (req, res) => {
    res.status(200);
    res.json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
    });

}

//Handling request for one single tour (by id)
const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(tour => tour.id === id);

    if (!tour) {
        return res.status(404).json({
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

}

//Handling Create a tour (using patch request)
const createTour = (req, res) => {
    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid ID'
        });
    }

    res.status(200);
    res.json({
        status: 'success',
        data: {
            tour: '<Updated tour here ...'
        }
    });

}

app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTour);



app.patch('/api/v1/tours/:id', createTour);

//Handling Tour Deleting

app.delete('/api/v1/tours/:id', (req, res) => {

    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid ID'
        });
    }

    res.status(204);
    res.json({
        status: 'success',
        data: {
            tour: null
        }
    });
});

//Handling post request to our api

app.post('/api/v1/tours', (req, res) => {

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

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
});