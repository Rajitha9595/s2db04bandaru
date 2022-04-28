var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shoe_controller = require('../controllers/shoe');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);


/// shoe ROUTES ///
// POST request for creating a shoe.
router.post('/shoes', shoe_controller.shoe_create_post);
// DELETE request to delete shoe.
router.delete('/shoes/:id', shoe_controller.shoe_delete);
// PUT request to update shoe.
router.put('/shoes/:id', shoe_controller.shoe_update_put);
// GET request for one shoe.
router.get('/shoes/:id', shoe_controller.shoe_detail);
// GET request for list of all shoe items.
router.get('/shoes', shoe_controller.shoe_list);
module.exports = router;
