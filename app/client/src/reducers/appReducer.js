// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddTodo: false,
  toggleMessageSelectGuest: false,
  toggleMessageSelectCompany: false,
  toggleMessageSelectTemplate: false,
  guestSelection: null,
  companySelection: null,
  templateSelection: null,
  messagePayload: null,
  error: null,
  successMsg:null
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_TODO':
          return {
            ...currentState,showAddTodo: !currentState.showAddTodo
          }
      case 'TOGGLE_SELECT_GUEST':
          return {
              ...currentState,
             // toggleMessageSelectGuest: !currentState.toggleMessageSelectGuest
              toggleMessageSelectGuest: true,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: currentState.toggleMessageSelectTemplate,
              guestSelection: action.guest,
              companySelection: currentState.companySelection,
              templateSelection: currentState.templateSelection,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null

          }
      case 'TOGGLE_SELECT_COMPANY':
          return {
              ...currentState,
              // toggleMessageSelectGuest: !currentState.toggleMessageSelectGuest
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: true,
              toggleMessageSelectTemplate: currentState.toggleMessageSelectTemplate,
              guestSelection: currentState.guestSelection,
              companySelection: action.company,
              templateSelection: currentState.templateSelection,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null

          }
      case 'TOGGLE_SELECT_TEMPLATE':
          return {
              ...currentState,
              // toggleMessageSelectGuest: !currentState.toggleMessageSelectGuest
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: true,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: action.template,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null
          }
      case 'MESSAGE_SEND_REQUEST':
          return {
              ...currentState,
              // toggleMessageSelectGuest: !currentState.toggleMessageSelectGuest
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: true,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: action.template,
              messagePayload: action.messagePayload,
              error: null,
              successMsg: null
          }
      case 'MESSAGE_SEND_SUCCESS':
          return {
              ...currentState,
              // toggleMessageSelectGuest: !currentState.toggleMessageSelectGuest
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: true,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: action.template,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: action.message
          }
      case 'MESSAGE_SEND_FAILED':
          return {
              ...currentState,
              // toggleMessageSelectGuest: !currentState.toggleMessageSelectGuest
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: true,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: action.template,
              messagePayload: currentState.messagePayload,
              error: action.error,
              successMsg: null
          }
      case 'TOGGLE_OTHER_BOX':
          return {
              ...currentState,
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: true,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: action.template,
              messagePayload: currentState.messagePayload,
              error: action.error,
              successMsg: null
          }




    default:
       return currentState;

  }
}

export default appReducer;
