const Joi = require('joi');

module.exports = {
    // GET /messenger/manage/hotels
    listHotels: {
        query: {
            page: Joi.number().min(1),
            perPage: Joi.number().min(1).max(100),
            company: Joi.string(),
            city: Joi.string(),
            timezone: Joi.string(),
        }
    },
    // POST /messenger/manage/hotels
    createHotel: {
        body: {
            company: Joi.string().required(),
            city: Joi.string().required(),
            timezone: Joi.object().required(),
        },
    },

    // PUT /messenger/manage/hotels/:Id
    replaceHotel: {
        body: {
            company: Joi.string(),
            city: Joi.string(),
            timezone: Joi.object(),
        }
    },

    // PATCH /messenger/manage/hotels/:Id
    updateHotel: {
        body: {
            company: Joi.string(),
            city: Joi.string(),
            timezone: Joi.object(),
        }
    },
};