const express = require('express');

const getAllUsers = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

const getUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

const createUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

const updateUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

const deleteUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}
const router = express.Router();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);