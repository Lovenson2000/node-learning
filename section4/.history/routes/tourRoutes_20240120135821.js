const express = require('express');
const tourController = require('./../controllers/tourContoller');

const router = express.Router();

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(deleteTour);

module.exports = router;