const express = require('express');
const morgan = require('morgan');

const tourRouter  = require('./routes/tourRoutes');
const userRouter  = require('./routes/userRoutes');
const app = express();

/************** MIDDLEWARES ****************/
app.use(morgan('dev'));
app.use(express.json()); //middleware

app.use((req, res, next) => {
    console.log("Hello from the middleware👋");
    next();
});

app.use((req, res, next) => {
    req.time = new Date().toISOString();
    next();
})

/************** ROUTES ****************/

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/************** START SERVER ****************/
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});