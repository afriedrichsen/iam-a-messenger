import {combineReducers} from 'redux';
import guests from './guestReducer';

const rootReducer = combineReducers({
    guests
})

export default rootReducer;