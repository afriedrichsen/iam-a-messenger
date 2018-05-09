// ./react-redux-client/src/reducers/companyReducer.js
const INITIAL_STATE = {
  companies:[],
  company:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  companyToDelete: null,
  showEditModal: false,
  companyToEdit: null,
  newCompany: null
}

export  const companyReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES_REQUEST':
          return {
            ...currentState,
            companies:[],
            company:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
          }

    case 'FETCH_COMPANIES_SUCCESS':
          return {
            ...currentState,
            companies:action.companies,
            company:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
          }

    case 'FETCH_COMPANIES_FAILED':
          return {
            ...currentState,
            companies:[],
            company:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
          }

    case 'FETCH_COMPANY_REQUEST':
          return {
            ...currentState,
            companies:currentState.companies,
            company:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
          }

    case 'FETCH_COMPANY_SUCCESS':
          return {
            ...currentState,
            companies:currentState.companies,
            company:action.company,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
          }

    case 'FETCH_COMPANY_FAILED':
          return {
            ...currentState,
            companies:[],
            company:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
          }

    case 'ADD_NEW_COMPANY_REQUEST':
          return {
            ...currentState,
            companies:currentState.companies,
            company:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
            newCompany: action.company
          }

    case 'ADD_NEW_COMPANY_REQUEST_FAILED':
          return {
            ...currentState,
            companies:currentState.companies,
            company:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
            newCompany: null
          }

    case 'ADD_NEW_COMPANY_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            companies:[...currentState.companies, action.company],
            company:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: false,
            companyToEdit: null,
            newCompany: action.company
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          companyToDelete: null,
          showEditModal: true,
          companyToEdit: action.company,
          newCompany: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          companyToDelete: null,
          showEditModal: false,
          companyToEdit: null,
          newCompany: null
        }

    case 'EDIT_COMPANY_REQUEST':
          return {
            ...currentState,
            companies:currentState.companies,
            company:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: true,
            companyToEdit: action.company,
            newCompany: null
          }

    case 'EDIT_COMPANY_SUCCESS':
         const updatedCompanies = currentState.companies.map((company) => {
           if(company._id !== action.company._id){
             //This is not the item we care about, keep it as is
             return company;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...company, ...action.company }
         })
          return {
            ...currentState,
            companies:updatedCompanies,
            company:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            companyToDelete: null,
            showEditModal: true,
            companyToEdit: action.company,
            newCompany: null
          }

  case 'EDIT_COMPANY_FAILED':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          companyToDelete: null,
          showEditModal: true,
          companyToEdit: currentState.companyToEdit,
          newCompany: null
        }

  case 'DELETE_COMPANY_REQUEST':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          companyToDelete: action.company,
          showEditModal: false,
          companyToEdit: null,
          newCompany: null
        }

  case 'DELETE_COMPANY_SUCCESS':
  const filteredCompanies = currentState.companies.filter((company) => company._id !== currentState.companyToDelete._id)
        return {
          ...currentState,
          companies:filteredCompanies,
          company:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          companyToDelete: null,
          showEditModal: false,
          companyToEdit: null,
          newCompany: null
        }


  case 'DELETE_COMPANY_FAILED':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          companyToDelete: null,
          showEditModal: false,
          companyToEdit: null,
          newCompany: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          companyToDelete: action.company,
          showEditModal: false,
          companyToEdit: null,
          newCompany: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          companies:currentState.companies,
          company:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          companyToDelete: null,
          showEditModal: false,
          companyToEdit: null,
          newCompany: null
        }


    default:
       return currentState;

  }
}
