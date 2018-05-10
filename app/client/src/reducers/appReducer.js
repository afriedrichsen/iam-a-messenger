// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddTodo: false,
  toggleMessageSelectGuest: false,
  toggleMessageSelectCompany: false,
  toggleMessageSelectTemplate: false,
  guestSelection: null,
  companySelection: null,
  templateSelection: null,
  templateSelectionStrName: null,
  messagePayload: null,
  error: null,
  successMsg: null,
  showOtherInputBox: null,
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
            templateSelectionStrName: currentState.templateSelectionStrName,
            messagePayload: currentState.messagePayload,
            error: null,
            successMsg: null,
            showOtherInputBox: currentState.showOtherInputBox,
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
              templateSelectionStrName: currentState.templateSelectionStrName,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null,
              showOtherInputBox: currentState.showOtherInputBox,

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
              templateSelectionStrName: action.template.value,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null,
              showOtherInputBox: currentState.showOtherInputBox,
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
              templateSelectionStrName: currentState.templateSelectionStrName,
              messagePayload: action.messagePayload,
              error: null,
              successMsg: null,
              showOtherInputBox: currentState.showOtherInputBox,
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
              templateSelectionStrName: currentState.templateSelectionStrName,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: action.message,
              showOtherInputBox: currentState.showOtherInputBox,
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
              successMsg: null,
              showOtherInputBox: currentState.showOtherInputBox,
          }
      case 'TOGGLE_OTHER_BOX':
          return {
              ...currentState,
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: currentState.toggleMessageSelectTemplate,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: 'other',
              templateSelectionStrName: currentState.templateSelectionStrName,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null,
              showOtherInputBox: true,
          }
      case 'UNTOGGLE_OTHER_BOX':
          return {
              ...currentState,
              toggleMessageSelectGuest: currentState.toggleMessageSelectGuest,
              toggleMessageSelectCompany: currentState.toggleMessageSelectCompany,
              toggleMessageSelectTemplate: currentState.toggleMessageSelectTemplate,
              guestSelection: currentState.guestSelection,
              companySelection: currentState.companySelection,
              templateSelection: currentState.templateSelection,
              templateSelectionStrName: currentState.templateSelectionStrName,
              messagePayload: currentState.messagePayload,
              error: null,
              successMsg: null,
              showOtherInputBox: false,
          }




    default:
       return currentState;

  }
}

export default appReducer;
