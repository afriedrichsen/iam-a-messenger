import * as types from '../actions/types';

import initialState from './initialState';

export default function guestReducer(state = initialState.guests, action) {
    switch(action.type) {
        case types.LOAD_GUESTS_SUCCESS:
            return action.guests
        default:
            return state;
    }
}