// ./react-redux-client/src/reducers/templateReducer.js
const INITIAL_STATE = {
  templates:[],
  template:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  templateToDelete: null,
  showEditModal: false,
  templateToEdit: null,
  newTemplate: null
}

export  const templateReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TEMPLATES_REQUEST':
          return {
            ...currentState,
            templates:[],
            template:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
          }

    case 'FETCH_TEMPLATES_SUCCESS':
          return {
            ...currentState,
            templates:action.templates,
            template:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
          }

    case 'FETCH_TEMPLATES_FAILED':
          return {
            ...currentState,
            templates:[],
            template:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
          }

    case 'FETCH_TEMPLATE_REQUEST':
          return {
            ...currentState,
            templates:currentState.templates,
            template:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
          }

    case 'FETCH_TEMPLATE_SUCCESS':
          return {
            ...currentState,
            templates:currentState.templates,
            template:action.template,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
          }

    case 'FETCH_TEMPLATE_FAILED':
          return {
            ...currentState,
            templates:[],
            template:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
          }

    case 'ADD_NEW_TEMPLATE_REQUEST':
          return {
            ...currentState,
            templates:currentState.templates,
            template:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
            newTemplate: action.template
          }

    case 'ADD_NEW_TEMPLATE_REQUEST_FAILED':
          return {
            ...currentState,
            templates:currentState.templates,
            template:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
            newTemplate: null
          }

    case 'ADD_NEW_TEMPLATE_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            templates:[...currentState.templates, action.template],
            template:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: false,
            templateToEdit: null,
            newTemplate: action.template
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          templateToDelete: null,
          showEditModal: true,
          templateToEdit: action.template,
          newTemplate: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          templateToDelete: null,
          showEditModal: false,
          templateToEdit: null,
          newTemplate: null
        }

    case 'EDIT_TEMPLATE_REQUEST':
          return {
            ...currentState,
            templates:currentState.templates,
            template:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: true,
            templateToEdit: action.template,
            newTemplate: null
          }

    case 'EDIT_TEMPLATE_SUCCESS':
         const updatedTemplates = currentState.templates.map((template) => {
           if(template._id !== action.template._id){
             //This is not the item we care about, keep it as is
             return template;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...template, ...action.template }
         })
          return {
            ...currentState,
            templates:updatedTemplates,
            template:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            templateToDelete: null,
            showEditModal: true,
            templateToEdit: action.template,
            newTemplate: null
          }

  case 'EDIT_TEMPLATE_FAILED':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          templateToDelete: null,
          showEditModal: true,
          templateToEdit: currentState.templateToEdit,
          newTemplate: null
        }

  case 'DELETE_TEMPLATE_REQUEST':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          templateToDelete: action.template,
          showEditModal: false,
          templateToEdit: null,
          newTemplate: null
        }

  case 'DELETE_TEMPLATE_SUCCESS':
  const filteredTemplates = currentState.templates.filter((template) => template._id !== currentState.templateToDelete._id)
        return {
          ...currentState,
          templates:filteredTemplates,
          template:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          templateToDelete: null,
          showEditModal: false,
          templateToEdit: null,
          newTemplate: null
        }


  case 'DELETE_TEMPLATE_FAILED':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          templateToDelete: null,
          showEditModal: false,
          templateToEdit: null,
          newTemplate: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          templateToDelete: action.template,
          showEditModal: false,
          templateToEdit: null,
          newTemplate: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          templates:currentState.templates,
          template:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          templateToDelete: null,
          showEditModal: false,
          templateToEdit: null,
          newTemplate: null
        }


    default:
       return currentState;

  }
}
