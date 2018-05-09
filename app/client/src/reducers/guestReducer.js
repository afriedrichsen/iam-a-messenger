// ./react-redux-client/src/reducers/guestReducer.js
const INITIAL_STATE = {
  guests:[],
  guest:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  guestToDelete: null,
  showEditModal: false,
  guestToEdit: null,
  newGuest: null
}

export  const guestReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_GUESTS_REQUEST':
          return {
            ...currentState,
            guests:[],
            guest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
          }

    case 'FETCH_GUESTS_SUCCESS':
          return {
            ...currentState,
            guests:action.guests,
            guest:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
          }

    case 'FETCH_GUESTS_FAILED':
          return {
            ...currentState,
            guests:[],
            guest:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
          }

    case 'FETCH_GUEST_REQUEST':
          return {
            ...currentState,
            guests:currentState.guests,
            guest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
          }

    case 'FETCH_GUEST_SUCCESS':
          return {
            ...currentState,
            guests:currentState.guests,
            guest:action.guest,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
          }

    case 'FETCH_GUEST_FAILED':
          return {
            ...currentState,
            guests:[],
            guest:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
          }

    case 'ADD_NEW_GUEST_REQUEST':
          return {
            ...currentState,
            guests:currentState.guests,
            guest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
            newGuest: action.guest
          }

    case 'ADD_NEW_GUEST_REQUEST_FAILED':
          return {
            ...currentState,
            guests:currentState.guests,
            guest:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
            newGuest: null
          }

    case 'ADD_NEW_GUEST_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            guests:[...currentState.guests, action.guest],
            guest:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: false,
            guestToEdit: null,
            newGuest: action.guest
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          guestToDelete: null,
          showEditModal: true,
          guestToEdit: action.guest,
          newGuest: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          guestToDelete: null,
          showEditModal: false,
          guestToEdit: null,
          newGuest: null
        }

    case 'EDIT_GUEST_REQUEST':
          return {
            ...currentState,
            guests:currentState.guests,
            guest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: true,
            guestToEdit: action.guest,
            newGuest: null
          }

    case 'EDIT_GUEST_SUCCESS':
         const updatedGuests = currentState.guests.map((guest) => {
           if(guest._id !== action.guest._id){
             //This is not the item we care about, keep it as is
             return guest;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...guest, ...action.guest }
         })
          return {
            ...currentState,
            guests:updatedGuests,
            guest:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            guestToDelete: null,
            showEditModal: true,
            guestToEdit: action.guest,
            newGuest: null
          }

  case 'EDIT_GUEST_FAILED':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          guestToDelete: null,
          showEditModal: true,
          guestToEdit: currentState.guestToEdit,
          newGuest: null
        }

  case 'DELETE_GUEST_REQUEST':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          guestToDelete: action.guest,
          showEditModal: false,
          guestToEdit: null,
          newGuest: null
        }

  case 'DELETE_GUEST_SUCCESS':
  const filteredGuests = currentState.guests.filter((guest) => guest._id !== currentState.guestToDelete._id)
        return {
          ...currentState,
          guests:filteredGuests,
          guest:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          guestToDelete: null,
          showEditModal: false,
          guestToEdit: null,
          newGuest: null
        }


  case 'DELETE_GUEST_FAILED':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          guestToDelete: null,
          showEditModal: false,
          guestToEdit: null,
          newGuest: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          guestToDelete: action.guest,
          showEditModal: false,
          guestToEdit: null,
          newGuest: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          guests:currentState.guests,
          guest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          guestToDelete: null,
          showEditModal: false,
          guestToEdit: null,
          newGuest: null
        }


    default:
       return currentState;

  }
}
