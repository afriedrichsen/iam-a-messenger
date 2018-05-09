const httpStatus = require('http-status');
const { omit } = require('lodash');
//const User = require('../models/user.model');

// Here are our models.
const Guest = require('../models/guest.model');
const Hotel = require('../models/hotel.model');
const Message = require('../models/message.model');

const greeting = require('../utils/timeGreeting');

const { handler: errorHandler } = require('../middlewares/error');
const moment = require('moment');

exports.sendMessage = async (req, res, next) => {

    try {
    Guest.findById(req.body.userId).then((noguest, guest) => {
        if (noguest) {
            //  return noguest;
            var targetGuest = noguest.firstName;
            var targetGuestRoom = 'Room ' + noguest.reservation.roomNumber;

        }
        else {

        }
        //console.log(result);

        //Here we build our custom greeting.
        var targetGreeting = greeting.getGreeting(moment());


        //let's grab the message template we want to send.
        Message.findById(req.body.messageId).then((nomessage, message) => {
            if (nomessage) {
                var messageResult = nomessage.messageBody;
            }
            else {

            }

            Hotel.findById(req.body.companyId).then((nocompany, company) => {
                if (nocompany) {
                    var targetCompany = nocompany.company;
                }
                else {

                }
                messageResult = messageResult.replace('#TARGET_GREETING',targetGreeting).replace('#TARGET_GUEST', targetGuest).replace('#TARGET_RESERVATION_LOCATION',targetGuestRoom).replace('#TARGET_LOCATION', targetCompany);
                console.log(messageResult);
                res.json({success: true, message:'Message output provided.', result: messageResult});
            });
        });
    });



    } catch(error) {
        next(error);
    }

};


exports.createMessageTemplateFromRequest = async (req, res, next) => {

};