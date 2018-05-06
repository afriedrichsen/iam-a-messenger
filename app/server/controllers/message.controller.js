const httpStatus = require('http-status');
const { omit } = require('lodash');
//const User = require('../models/user.model');


const Guest = require('../models/guest.model');
const Hotel = require('../models/hotel.model');
const Message = require('../models/message.model');

const { handler: errorHandler } = require('../middlewares/error');


exports.sendMessage = async (req, res, next) => {

    try {

    } catch(error) {
        next(error);
    }

};


exports.createMessageTemplateFromRequest = async (req, res, next) => {

};