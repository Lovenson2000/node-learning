const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

/************** MIDDLEWARES ****************/
app.use(morgan('common'));
app.use(express.json()); //middleware

app.use((req, res, next) => {
    console.log("Hello from the middleware👋");
    next();
});

//A middleware to get the time of a request

app.use((req, res, next) => {
    req.time = new Date().toISOString();
    next();
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

/************** ROUTE HANDLERS ****************/

// Handling get request for all tours
const getAllTours = (req, res) => {
    console.log(req.time);
    res.status(200);
    res.json({
        status: 'success',
        requestedAt: req.time,
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

//Handling post request to our api
const createTour = (req, res) => {

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
}

//Handling Update on a tour (using patch request)
const updateTour = (req, res) => {
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

//Handling Tour Deleting
const deleteTour = (req, res) => {
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
}

/************** ROUTES ****************/
app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);


/************** START SERVER ****************/
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});