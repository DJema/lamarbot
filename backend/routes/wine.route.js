const express = require('express');
const router = express.Router();

// Require the controllers 
const wine_controller = require('../controllers/wine.controller');

// test url
router.get('/test', wine_controller.test);
module.exports = router;