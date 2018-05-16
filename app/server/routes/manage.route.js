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
    /**
     * @api {post} messenger/manage/guests/upload Upload Guests
     * @apiDescription Upload array of guests/users.
     * @apiVersion 1.0.0
     * @apiName uploadGuests
     * @apiGroup Guest
     *
     *
     * @apiParam {Object[]} guests List of guests/users.
     *
     *
     *  @apiSuccess {Object[]} users List of guests.
     *  @apiSuccess {string} message Server success message.
     */
    .post(controller.uploadGuests);

router
    .route('/guests/:id')
    .get(controller.getGuestById)
    .patch(controller.updateGuest)
    .delete(controller.removeGuest);

router
    .route('/companies')
    /**
     * @api {get} messenger/manage/companies List Companies
     * @apiDescription Get a list of companies/locations
     * @apiVersion 1.0.0
     * @apiName getAllHotels
     * @apiGroup Company
     *
     *
     *
     *
     * @apiParam  {Number{1-}}         [page=1]     List page
     * @apiParam  {Number{1-100}}      [perPage=1]  Companies per page
     *
     *
     *
     *
     *
     * @apiSuccess {Object[]} companies List of companies.
     *
     *
     *
     */
    .get(controller.getAllHotels)
    .post(controller.createHotel);

router
    .route('/companies/upload')
    /**
     * @api {post} messenger/manage/companies/upload Upload Companies
     * @apiDescription Upload array of companies/locations.
     * @apiVersion 1.0.0
     * @apiName uploadHotels
     * @apiGroup Company
     *
     *
     * @apiParam {Object[]} companies List of companies.
     *
     *
     *  @apiSuccess {Object[]} companies List of companies.
     *  @apiSuccess {string} message Server success message.
     */
    .post(controller.uploadHotels);

router
    .route('/companies/:id')
    .get(controller.getHotelById)
    .patch(controller.updateHotel)
    .delete(controller.removeHotel)

router
    .route('/templates')
    /**
     * @api {get} messenger/manage/guests List Message Templates
     * @apiDescription Get a list of message/notification templates.
     * @apiVersion 1.0.0
     * @apiName getAllMessageTemplates
     * @apiGroup Message
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
     * @api {post} messenger/manage/templates Create Messsage Template.
     * @apiDescription Create a new message template
     * @apiVersion 1.0.0
     * @apiName createMessageTemplate
     * @apiGroup Message
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
    .route('/templates/upload')
    /**
     * @api {post} messenger/manage/templates/upload Upload Messsage Templates.
     * @apiDescription Create a new message template
     * @apiVersion 1.0.0
     * @apiName createMessageTemplate
     * @apiGroup Message
     *
     *
     *
     *
     * @apiParam  {Object}             messages       Array of Message template objects (JSON).
     *
     *
     *
     *
     *
     *
     * @apiSuccess (Created 201) {Object}  messageBody     Message.js template's reservation
     * @apiSuccess (Created 201) {Date}    createdAt       Timestamp
     *
     *
     *
     *
     */
    .post(controller.uploadMessageTemplates);

router
    .route('/templates/:id')
    .get(controller.getTemplateById)
    .patch(controller.updateMessageTemplate)
    .delete(controller.removeMessageTemplate)

router
    .route('/initialize')
    /**
     * @api {get} messenger/manage/initialize Initialize Application Data.
     * @apiDescription Load application with mock data store within application project directory.
     * @apiVersion 1.0.0
     * @apiName loadServerDataFromFiles
     * @apiGroup Admin
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * @apiSuccess (Created 201) {String}  message      Success message.
     *
     *
     *
     *
     *
     */
    .get(controller.loadServerDataFromFiles);

module.exports = router;