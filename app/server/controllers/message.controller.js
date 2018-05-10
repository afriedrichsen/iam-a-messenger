const httpStatus = require('http-status');
const { omit } = require('lodash');
//const User = require('../models/user.model');
const mongoose = require('mongoose');
// Here are our models.
const Guest = require('../models/guest.model');
const Hotel = require('../models/hotel.model');
const Message = require('../models/message.model');

const greeting = require('../utils/timeGreeting');

const { handler: errorHandler } = require('../middlewares/error');
const moment = require('moment');

exports.sendMessage = async (req, res, next) => {
    console.log(req);

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
        var targetGreeting = greeting.getGreeting(moment()) + ', ' + targetGuest;


        //let's grab the message template we want to send.
        Message.findById(req.body.messageId || mongoose.Types.ObjectId()).then((nomessage, message) => {
            var messageResult;

            if (nomessage) {
                messageResult = nomessage.messageBody;

            }
            else {
                messageResult = req.body.otherMessage;
            }

            Hotel.findById(req.body.companyId).then((nocompany, company) => {
                if (nocompany) {
                    var targetCompany = nocompany.company;
                }
                else {

                }
                messageResult = messageResult.replace('#TARGET_RESERVATION_LOCATION',targetGuestRoom).replace('#TARGET_LOCATION', targetCompany);
                messageResult = targetGreeting + ' ' + messageResult;
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