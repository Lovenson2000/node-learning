const express = require('express');

/************** ROUTE HANDLERS ****************/
exports.getAllUsers = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

exports.getUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

exports.createUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

exports.updateUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}

exports.deleteUser = (req, res) => {
    const statusCode = 500;
    res.status(statusCode)
    res.json({
        status: 'error',
        message: `${statusCode} Server Error`
    });
}