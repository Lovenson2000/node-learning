const Tour = require('./../models/tourModel')
/************** ROUTE HANDLERS ****************/

exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next();
}

exports.getAllTours = (req, res) => {
    console.log(req.time);
    res.status(200);
    res.json({
        status: 'success',
        requestedAt: req.time,
        // result: tours.length,
        // data: {
        //     tours
        // }
    });
}

exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    // const tour = tours.find(tour => tour.id === id);

    // res.status(200);
    // res.json({
    //     status: 'success',
    //     data: {
    //         tour
    //     }
    // });
}

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     tour: newTour
        // }
    })
}

exports.updateTour = (req, res) => {

    res.status(200);
    res.json({
        status: 'success',
        data: {
            tour: '<Updated tour here ...'
        }
    });
}

exports.deleteTour = (req, res) => {

    res.status(204);
    res.json({
        status: 'success',
        data: {
            tour: null
        }
    });
}