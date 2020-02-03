const express = require('express');
const router = express.Router();

// Require the controllers 
const wine_controller = require('../controllers/wine.controller');

// test url
router.get('/test', wine_controller.test);
module.exports = router;

// POST
router.post('/create', wine_controller.wine_create);

// GET by id
router.get('/id/:id', wine_controller.wine_details);

// GET all
router.get('/all', wine_controller.wine_get_all);
 
// PUT by id
router.put('/:id/update', wine_controller.wine_update);

// DELETE by id
router.delete('/:id/delete', wine_controller.wine_delete);