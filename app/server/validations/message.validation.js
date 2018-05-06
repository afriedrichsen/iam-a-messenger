const Joi = require('joi');

module.exports = {
    // GET /messenger/manage/guests
    listUsers: {
        query: {
            page: Joi.number().min(1),
            perPage: Joi.number().min(1).max(100),
            firstName: Joi.string(),
            lastName: Joi.string(),
            reservation: Joi.object(),
        }
    },
    // POST /messenger/manage/guests
    createUser: {
        body: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            reservation: Joi.object().required(),
        },
    },

    // PUT /messenger/manage/guests/:Id
    replaceUser: {
        body: {
            firstName: Joi.string(),
            lastName: Joi.string(),
            reservation: Joi.object(),
        }
    },

    // PATCH /messenger/manage/guests/:Id
    updateUser: {
        body: {
            firstName: Joi.string(),
            lastName: Joi.string(),
            reservation: Joi.object(),
        }
    },
};