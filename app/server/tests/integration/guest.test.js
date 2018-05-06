/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcryptjs');
const { some, omitBy, isNil } = require('lodash');
const app = require('../../index');
const Guest = require('../../models/guest.model');

/**
 * root level hooks
 * */


describe('Guests API', async () => {
    let guest;
    let dbGuests;
    let newUser;

    beforeEach(async () => {
        dbGuests = {
            hankHill: {
                firstName: 'Hank',
                lastName: 'Hill',
                reservation: {
                    roomNumber: 314,
                    startTimestamp: 1486520344,
                    endTimestamp: 1486769616
                }
            },
            mortySmith: {
                firstName: 'Morty',
                lastName: 'Smith',
                reservation: {
                    roomNumber: 192,
                    startTimestamp: 1486520344,
                    endTimestamp: 1486769616
                }
            }
        };


        newUser = {
            id: 42069,
            firstName: 'Alex',
            lastName: 'Friedrichsen',
            reservation: {
                roomNumber: 42,
                startTimestamp: 1486520344,
                endTimestamp: 1486769616
            }
        };


        await Guest.remove({});
        await Guest.insertMany([dbGuests.hankHill, dbGuests.mortySmith]);

    });

    describe('POST /messenger/manage/guests', () => {
        it('should create a new user when request is ok', () => {
            return request(app)
                .post('/messenger/manage/guests')
                .send(newUser)
                .expect(httpStatus.CREATED)
                .then((res) => {
                    console.log(res.body);
                    //  expect(res.body).to.include(newUser.id);
                });
        });


    });

    describe('GET /messenger/manage/guests', () => {
        it('should get all guests', () => {
            return request(app)
                .get('/messenger/manage/guests')
                .expect(httpStatus.OK)
                .then((res) => {

                });
        });
    });
});
