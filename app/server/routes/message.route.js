const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/message.controller');

const router = express.Router();

router
    .route('/send')
    .post(controller.sendMessage);

router
    .route('/template')
    .post(controller.createMessageTemplateFromRequest);

module.exports = router;