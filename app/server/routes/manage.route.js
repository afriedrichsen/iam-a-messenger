const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/manage.controller');

const router = express.Router();

router
    .route('/guests')
    .get(controller.getAllGuests)
    .post(controller.createGuest);

router
    .route('/guests/upload')
    .post(controller.uploadGuests);

module.exports = router;