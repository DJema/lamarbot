const Wine = require('../models/wine.model');
const mongoose = require('mongoose');

// test 
exports.test = function (req, res) {
    res.send('Test controller up and running!')
};

// POST create
exports.wine_create = function (req, res, next) {
    let wine = new Wine(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    wine.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Wine Created successfully')
    })
};

// GET by id
exports.wine_details = function (req, res, next) {
    Wine.findById(req.params.id, function (err, wine) {
        if (err) return next(err);
        res.send(wine);
    })
};

// PUT update by id
exports.wine_update = function (req, res, next) {
    Wine.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, wine) {
        if (err) return next(err);
        res.send('Wine Udpated.');
    });
};

// DELETE by id
exports.wine_delete = function (req, res, next) {
    Wine.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

// GET all
exports.wine_get_all = function (req, res) {
    Wine.find(function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};