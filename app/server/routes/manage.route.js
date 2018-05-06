const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/manage.controller');

const router = express.Router();

router
    .route('/guests')
    /**
     * @api {get} messenger/manage/guests List Guests
     * @apiDescription Get a list of guests/users
     * @apiVersion 1.0.0
     * @apiName getAllGuests
     * @apiGroup Guest
     *
     *
     *
     *
     * @apiParam  {Number{1-}}         [page=1]     List page
     * @apiParam  {Number{1-100}}      [perPage=1]  Users per page
     * @apiParam  {String}             [firstName]       User's first name
     * @apiParam  {String}             [lastName]       User's last name
     * @apiParam  {Object}             [reservation]      User's reservation
     *
     *
     * @apiSuccess {Object[]} users List of guests users.
     *
     *
     *
     */
    .get(controller.getAllGuests)
    /**
     * @api {post} messenger/manage/guests Create Guest
     * @apiDescription Create a new guest/user
     * @apiVersion 1.0.0
     * @apiName createGuest
     * @apiGroup Guest
     *
     *
     *
     *
     * @apiParam  {String}             firstName      User's first name
     * @apiParam  {String}             lastName       User's last name
     * @apiParam  {Object}             reservation    Guest's/users's reservation information
     *
     *
     * @apiSuccess (Created 201) {String}  id         User's id
     * @apiSuccess (Created 201) {String}  firstName       User's first name
     * @apiSuccess (Created 201) {String}  lastName      User's last name
     * @apiSuccess (Created 201) {Object}  reservation       User's reservation
     * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
     *
     *
     *
     *
     */
    .post(controller.createGuest);

router
    .route('/guests/upload')
    .post(controller.uploadGuests);

router
    .route('/guests/:id')
    .get()
    .patch(controller.updateGuest)
    .delete(controller.removeGuest)

router
    .route('/hotels')
    .get(controller.getAllHotels)
    .post(controller.createHotel);

router
    .route('/hotels/upload')
    .post(controller.uploadHotels);

router
    .route('/hotels/:id')
    .get()
    .patch(controller.updateHotel)
    .delete(controller.removeHotel)

router
    .route('/messages')
    /**
     * @api {get} messenger/manage/guests List Message.js Templates
     * @apiDescription Get a list of message/notification templates.
     * @apiVersion 1.0.0
     * @apiName getAllMessageTemplates
     * @apiGroup Message.js
     *
     *
     *
     *
     * @apiParam  {Number{1-}}         [page=1]         List page
     * @apiParam  {Number{1-100}}      [perPage=1]      Message.js templates per page
     * @apiParam  {String}             [messageType]      Message.js template type
     * @apiParam  {String}             [messangeBody]       Message.js template body
     *
     *
     *
     * @apiSuccess {Object[]} messages List of message templates.
     *
     *
     *
     */
    .get(controller.getAllMessageTemplates)
    /**
     * @api {post} messenger/manage/messages Create Messsage Template.
     * @apiDescription Create a new message template
     * @apiVersion 1.0.0
     * @apiName createMessageTemplate
     * @apiGroup Message.js
     *
     *
     *
     *
     * @apiParam  {String}             messageType       Message.js template type
     * @apiParam  {String}             messageBody       Message.js template body.
     *
     *
     *
     * @apiSuccess (Created 201) {String}  id              Message.js template's id
     * @apiSuccess (Created 201) {String}  messageType     Message.js template's last name
     * @apiSuccess (Created 201) {Object}  messageBody     Message.js template's reservation
     * @apiSuccess (Created 201) {Date}    createdAt       Timestamp
     *
     *
     *
     *
     */
    .post(controller.createMessageTemplate);

router
    .route('/messages/upload')
    .post(controller.uploadMessageTemplates);

router
    .route('/messages/:id')
    .get()
    .patch(controller.updateMessageTemplate)
    .delete(controller.removeMessageTemplate)


module.exports = router;