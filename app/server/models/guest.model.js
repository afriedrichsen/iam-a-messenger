const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const APIError = require('../utils/APIError');

/**
* Guest (User) Schema
 * @private
*/

const guestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    reservation: {
        roomNumber: {
            type: Number,
            required: true
        },

        startTimestamp: {
            type: Date,
            required: true
        },

        endTimestamp: {
            type: Date,
            required: true
        }
    }
},{collection:'guests',
    timestamps: true});


/**
 * Statics
 */
guestSchema.statics = {
    /**
     * Get user
     * @param {ObjectId} id - The objectId of the user.
     * @returns {Promise<User, APIError>}
     * */
    async get(id) {
        try {
            let guest;
            if (mongoose.Types.ObjectId.isValid(id)) {
                guest = await this.findById(id).exec();
            }
            if (guest) {
               return guest;
            }

            throw new APIError({
               message: 'User does not exist',
               status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List users in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<User[]>}
     */
    list({
      page=1, perPage=30, firstName, lastName,
       }) {
        const options = omitBy({firstName, lastName}, isNil);

        return this.find(options)
            .sort({createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec();
  }
};

/**
 * @typedef Guest
 */
module.exports = mongoose.model('guests',guestSchema);