const httpStatus = require('http-status');
const { omit } = require('lodash');
//const User = require('../models/user.model');


const Guest = require('../models/guest.model');
const Hotel = require('../models/hotel.model');
const Message = require('../models/message.model');

const { handler: errorHandler } = require('../middlewares/error');


/**
 *
 * Here are the controllers specifically for guest/user functionality.
 *
 *
 * */



exports.getAllGuests = async (req, res, next) => {
    try {
      Guest.find({}, (err, guest) => {
          if (err){
              res.send(err)
          }
          res.json(guest)
      })
    } catch(error){
        next(error);
    }

};

/**
 * Create new guest
 * @public
 */
exports.createGuest = async (req, res, next) => {
    try {
        const guest = new Guest(req.body);
        const savedGuest = await guest.save();
        res.status(httpStatus.CREATED);
        res.json(savedGuest);
    } catch(error) {
        next(error);
    }

};

/**
 * Create new guests (batch request).
 * @public
 */
exports.uploadGuests = async (req, res, next) => {
    try {
        //console.log(req.body);
        const data = JSON.parse(JSON.stringify(req.body));
        for(var i=0; i < data.length; i++) {
            const guest = new Guest(data[i]);
            const savedGuest = await guest.save();
        }
        res.status(httpStatus.CREATED);
        res.json(data);
    } catch(error) {
        next(error);
    }
}


/**
 * Update existing guest
 * @public
 * */
exports.updateGuest = (req, res, next) => {
    const updatedUser = req.body;
    const user = Object.assign(req.locals.guest, updatedUser);

    user.save()
        .then(savedGuest => res.json(savedGuest))
        .catch(e => next(e));
};

/**
 * Delete guest
 * @public
 */
exports.removeGuest = (req, res, next) => {
    const { guest } = req.locals;

    guest.remove()
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};

/**
 *
 * Here are the controllers specifically for hotel/location functionality.
 *
 *
 * */



exports.getAllHotels = async (req, res, next) => {

};

/**
 * Create new hotel/location
 * @public
 */
exports.createHotel = async (req, res, next) => {
    try {
        const hotel = new Hotel(req.body);
        const savedHotel = await hotel.save();
        res.status(httpStatus.CREATED);
        res.json(savedHotel);
    } catch(error) {
        next(error);
    }

};

/**
 * Create new hotels/locations (batch request).
 * @public
 */
exports.uploadHotels = async (req, res, next) => {
    try {
        //console.log(req.body);
        const data = JSON.parse(JSON.stringify(req.body));
        for(var i=0; i < data.length; i++) {
            const hotel = new Hotel(data[i]);
            const savedHotel = await hotel.save();
        }
        res.status(httpStatus.CREATED);
        res.json(data);
    } catch(error) {
        next(error);
    }
}


/**
 * Update existing hotel/location
 * @public
 * */
exports.updateHotel = (req, res, next) => {
    const updatedHotel = req.body;
    const hotel = Object.assign(req.locals.hotel, updatedHotel);

    hotel.save()
        .then(savedHotel => res.json(savedHotel))
        .catch(e => next(e));
};

/**
 * Delete hotel/location
 * @public
 */
exports.removeHotel = (req, res, next) => {
    const { hotel } = req.locals;

    hotel.remove()
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};

/**
 *
 * Here are the controllers specifically for message template management functionality.
 *
 *
 * */



exports.getAllMessageTemplates = async (req, res, next) => {

};

/**
 * Create new message/notification template
 * @public
 */
exports.createMessageTemplate = async (req, res, next) => {
    try {
        const template = new Message(req.body);
        const savedTemplate = await template.save();
        res.status(httpStatus.CREATED);
        res.json(savedTemplate);
    } catch(error) {
        next(error);
    }

};

/**
 * Create new message/notifications (batch request).
 * @public
 */
exports.uploadMessageTemplates = async (req, res, next) => {
    try {
        //console.log(req.body);
        const data = JSON.parse(JSON.stringify(req.body));
        for(var i=0; i < data.length; i++) {
            const template = new Message(data[i]);
            const savedTemplate = await template.save();
        }
        res.status(httpStatus.CREATED);
        res.json(data);
    } catch(error) {
        next(error);
    }
};


/**
 * Update existing message/notification template.
 * @public
 * */
exports.updateMessageTemplate = (req, res, next) => {
    const updatedTemplate = req.body;
    const template = Object.assign(req.locals.template, updatedTemplate);

    template.save()
        .then(savedTemplate => res.json(savedTemplate))
        .catch(e => next(e));
};

/**
 * Delete guest
 * @public
 */
exports.removeMessageTemplate = (req, res, next) => {
    const { template } = req.locals;

    template.remove()
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};