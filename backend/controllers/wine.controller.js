const Wine = require('../models/wine.model');

// test 
exports.test = function (req, res) {
    res.send('Test controller up and running!')
};

// POST
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