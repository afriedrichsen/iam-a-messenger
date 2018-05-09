// ./react-redux-client/src/actions/guestActions.js

const apiUrl = "/messenger/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_GUEST'
  }
}

export const addNewGuest = (guest) => {console.log(guest)
  return (dispatch) => {
    dispatch(addNewGuestRequest(guest));
    return fetch(apiUrl, {
      method:'post',
      body: guest,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.guest);
          dispatch(addNewGuestRequestSuccess(data.guest, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewGuestRequestFailed(error))
        })
      }
    })
  }
}

export const addNewGuestRequest = (guest) => {
  return {
    type: 'ADD_NEW_GUEST_REQUEST',
    guest
  }
}

export const addNewGuestRequestSuccess = (guest,message) => {
  return {
    type: 'ADD_NEW_GUEST_REQUEST_SUCCESS',
    guest:guest,
    message:message
  }
}

export const addNewGuestRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_GUEST_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchGuests = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchGuestsRequest());
    // Returns a promise
    return fetch(apiUrl+'manage/guests')
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchGuestsSuccess(data.guests,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchGuestsFailed(error));
                    })
                  }
                })


  }
}

export const fetchGuestsRequest = () => {
  return {
    type:'FETCH_GUESTS_REQUEST'
  }
}


export const submitGuestsBatch = (guests) => {console.log(guests)
    return (dispatch) => {
        dispatch(uploadGuestsRequest(guests));
        return fetch(apiUrl+'manage/users/upload', {
            method:'post',
            body: guests,
            processData:false,
            contentType: false
        }).then(response => {
            if(response.ok){
                response.json().then(data => {console.log(data.guests);
                    dispatch(addNewGuestRequestSuccess(data.guests, data.message))
                })
            }
            else{
                response.json().then(error => {
                    dispatch(addNewGuestRequestFailed(error))
                })
            }
        })
    }
}


//Sync action
export const fetchGuestsSuccess = (guests,message) => {
  return {
    type: 'FETCH_GUESTS_SUCCESS',
    guests: guests,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchGuestsFailed = (error) => {
  return {
    type:'FETCH_GUESTS_FAILED',
    error
  }
}

export const fetchGuestById = (guestId) => {
  return (dispatch) => {
    dispatch(fetchGuestRequest());
      // Returns a promise
      return fetch(apiUrl + 'manage/guests/' +guestId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchGuestSuccess(data.guest, data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchGuestFailed(error));
                 })
               }
             })

  }
}

export const fetchGuestRequest = () => {
  return {
    type:'FETCH_GUEST_REQUEST'
  }
}


//Sync action
export const fetchGuestSuccess = (guest,message) => {
  return {
    type: 'FETCH_GUEST_SUCCESS',
    guest: guest,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchGuestFailed = (error) => {
  return {
    type:'FETCH_GUEST_FAILED',
    error
  }
}

export const showEditModal = (guestToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    guest:guestToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editGuest = (guest) => {
    alert(guest.id);
    return (dispatch) => {
      dispatch(editGuestRequest(guest));
      return fetch(apiUrl+ 'manage/guests/' + guest.id, {
        method:'patch',
        body:guest
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editGuestSuccess(data.guest,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editGuestFailed(error));
          })
        }
      })
    }
}

export const editGuestRequest = (guest) => {
   return {
     type:'EDIT_GUEST_REQUEST',
     guest
   }
}

export const editGuestSuccess = (guest,message) => {
  return {
    type:'EDIT_GUEST_SUCCESS',
    guest:guest,
    message:message
  }
}

export const editGuestFailed = (error) => {
  return {
    type:'EDIT_GUEST_FAILED',
    error
  }
}

export const deleteGuest = (guest) => {
  return (dispatch) => {
    dispatch(deleteGuestRequest(guest));
    return fetch(apiUrl + 'manage/guests/' +guest._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteGuestSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteGuestFailed(error));
        })
      }
    })

  }
}

export const deleteGuestRequest = (guest) => {
   return {
     type:'DELETE_GUEST_REQUEST',
     guest
   }
}

export const deleteGuestSuccess = (message) => {
  return {
    type:'DELETE_GUEST_SUCCESS',
    message:message
  }
}

export const deleteGuestFailed = (error) => {
  return {
    type:'DELETE_GUEST_FAILED',
    error
  }
}

export const showDeleteModal = (guestToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    guest:guestToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}

export const uploadGuestsRequest = (guests) => {
  return {
    type:'UPLOAD_GUESTS_REQUEST',
    guests: guests

  }
}

export const uploadGuestsRequestSuccess = (guests,message) => {
    return {
        type: 'UPLOAD_GUESTS_SUCCESS',
        guests:guests,
        message:message
    }
}

export const uploadGuestsRequestFailed = (error) => {
    return {
        type: 'UPLOAD_GUESTS_FAILED',
        error
    }
}

export const toggleSelectGuest = () => {
    return {
        type: 'TOGGLE_SELECT_GUEST'
    }
}
