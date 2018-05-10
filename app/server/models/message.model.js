const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const APIError = require('../utils/APIError');

/**
 * Message.js (Notfication) Schema
 * @private
 */

const messageSchema = new mongoose.Schema({
    messageType: {
        type: String,
        required: true,
        trim: true
    },

    messageBody: {
        type: String,
        required: false,
        trim: true
    },

    otherMessage: {
        type: String,
        required: false,
        trim: true
    }
},{collection:'messages',
    timestamps: true});


/**
 * Statics
 */
messageSchema.statics = {
    /**
     * Get message template
     * @param {ObjectId} id - The objectId of the message template.
     * @returns {Promise<Message, APIError>}
     * */
    async get(id) {
        try {
            let template;
            if (mongoose.Types.ObjectId.isValid(id)) {
                template = await this.findById(id).exec();
            }
            if (template) {
                return template;
            }

            throw new APIError({
                message: 'Message.js template does not exist',
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List message templates in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of templates to be skipped.
     * @param {number} limit - Limit number of templates to be returned.
     * @returns {Promise<Message[]>}
     */
    list({
             page=1, perPage=30, messageType, messageBody
         }) {
        const options = omitBy({messageType, messageBody}, isNil);

        return this.find(options)
            .sort({createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec();
    }
};

/**
 * @typedef Message
 */
module.exports = mongoose.model('messages',messageSchema);