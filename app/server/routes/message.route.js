const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/message.controller');

const router = express.Router();

router
    .route('/send')
    /**
     * @api {post} messenger/message/send Create Guest
     * @apiDescription Send notification to user.
     * @apiVersion 1.0.0
     * @apiName sendMessage
     * @apiGroup Message
     *
     *
     *
     *
     * @apiParam  {String}             userId          User's db object ID
     * @apiParam  {String}             companyId       Company db object ID
     * @apiParam  {String}             messageId       Template db object ID
     *
     *
     *
     *
     *
     * @apiSuccess (Created 201) {Object}  message       Custom message output sent to the user.
     *
     *
     *
     *
     *
     */
    .post(controller.sendMessage);

module.exports = router;