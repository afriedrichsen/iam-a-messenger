const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/message.controller');

const router = express.Router();

router
    .route('/message/send')
//    .get(controller.getAllGuests)
    .post(controller.sendMessage);

router
    .route('/message/template')
    .post(controller.createMessageTemplateFromRequest);

module.exports = router;