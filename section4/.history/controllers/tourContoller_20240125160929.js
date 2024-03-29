const Tour = require('./../models/tourModel')
/************** ROUTE HANDLERS ****************/

exports.getAllTours = async (req, res) => {

    try {
        const tours = await Tour.find();

        res.status(200);
        res.json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
}

exports.getTour = async (req, res) => {
    
    try {
        const tour = await Tour.findById(req.params.id);
        // Tour.findOne({ _id: req.params.id});
        
        res.status(200);
        res.json({
            status: 'success',
            data: {
                tour
            }
        });
        
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
        
    }
}

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
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