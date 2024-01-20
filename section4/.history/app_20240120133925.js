const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const { STATUS_CODES } = require('http');

const app = express();

/************** MIDDLEWARES ****************/
app.use(morgan('dev'));
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

/************** ROUTES ****************/

const tourRouter = express.Router();
const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/************** START SERVER ****************/
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});