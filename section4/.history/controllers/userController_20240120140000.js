const express = require('express');

/************** ROUTE HANDLERS ****************/

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