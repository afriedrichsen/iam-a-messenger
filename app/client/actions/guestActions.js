import axios from 'axios';
import { LOAD_GUESTS_SUCCESS, SUBMIT_GUEST, ERROR_RESPONSE } from './types';

import DataService from '../utils/webservice-client';

export function loadGuests() {
    return (dispatch) => {
        return dataService.listGuests().then(guests => {
            dispatch(loadGuestSucess(guests))
        }).catch(error => {
            throw(error);
        })
    }
}

export function loadGuestSucess(guests) {
    return {type: types.LOAD_GUESTS_SUCCESS, guests};
}