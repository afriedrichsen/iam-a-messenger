const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const APIError = require('../utils/APIError');

/**
 * Hotel (Location/Business) Schema
 * @private
 */

const hotelSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true
    },

    city: {
        type: String,
        required: true,
        trim: true
    },

    timezone: {

        type: String,
        required: true

    }
},{collection:'hotels',
    timestamps: true});


/**
 * Statics
 */
hotelSchema.statics = {
    /**
     * Get hotel
     * @param {ObjectId} id - The objectId of the hotel.
     * @returns {Promise<Hotel, APIError>}
     * */
    async get(id) {
        try {
            let hotel;
            if (mongoose.Types.ObjectId.isValid(id)) {
                hotel = await this.findById(id).exec();
            }
            if (hotel) {
                return hotel;
            }

            throw new APIError({
                message: 'Hotel/Location does not exist',
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List hotels in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of hotels/companies/locations to be skipped.
     * @param {number} limit - Limit number of hotels/companies/locations to be returned.
     * @returns {Promise<Hotel[]>}
     */
    list({
             page=1, perPage=30, company, city, timezone,
         }) {
        const options = omitBy({company, city, timezone}, isNil);

        return this.find(options)
            .sort({createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec();
    }
};

/**
 * @typedef Hotel
 */
module.exports = mongoose.model('hotels',hotelSchema);