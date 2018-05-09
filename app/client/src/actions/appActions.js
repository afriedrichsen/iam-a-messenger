// ./react-redux-client/src/actions/appActions.js

// These Redux actions pertain to the main application functionality vs. the actions for each respective application object (users, companies, etc.).

import {addNewGuestRequest, addNewGuestRequestFailed, addNewGuestRequestSuccess} from "./guestActions";

const apiUrl = '/messenger/'

export const toggleAddGuest = () => {
  return {
    type: 'TOGGLE_ADD_TODO'
  }
}

export const toggleGuestHomeMenu = (guest) => {
    return {
        type: 'TOGGLE_SELECT_GUEST',
        guest
    }
}

export const toggleCompanyHomeMenu = (company) => {
    return {
        type: 'TOGGLE_SELECT_COMPANY',
        company
    }
}

export const toggleTemplateHomeMenu = (template) => {
    return {
        type: 'TOGGLE_SELECT_TEMPLATE',
        template
    }
}

export const sendMessage = (guest) => {console.log(guest)
    return (dispatch) => {
        dispatch(sendMessageRequest(guest));
        return fetch(apiUrl+'message/send', {
            method:'post',
            body: guest,
        }).then(response => {
            if(response.ok){
                response.json().then(data => {console.log(data.guest);
                    dispatch(sendMessageSuccess(data.guest, data.message))
                    alert(data.result)
                })
            }
            else{
                response.json().then(error => {
                    dispatch(sendMessageFailed(error))
                })
            }
        })
    }
}

export const sendMessageRequest = (guest) => {
    return {
        type:'SEND_MESSAGE_REQUEST',
        guest
    }
}

export const sendMessageSuccess = (message) => {
    return {
        type:'SEND_MESSAGE_SUCCESS',
        message:message
    }
}

export const sendMessageFailed = (error) => {
    return {
        type:'SEND_MESSAGE_FAILED',
        error
    }
}
