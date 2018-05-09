// ./react-redux-client/src/actions/companyActions.js

const apiUrl = "/messenger/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_COMPANY'
  }
}

export const addNewCompany = (company) => {console.log(company)
  return (dispatch) => {
    dispatch(addNewCompanyRequest(company));
    return fetch(apiUrl, {
      method:'post',
      body: company,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.company);
          dispatch(addNewCompanyRequestSuccess(data.company, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewCompanyRequestFailed(error))
        })
      }
    })
  }
}

export const addNewCompanyRequest = (company) => {
  return {
    type: 'ADD_NEW_COMPANY_REQUEST',
    company
  }
}

export const addNewCompanyRequestSuccess = (company,message) => {
  return {
    type: 'ADD_NEW_COMPANY_REQUEST_SUCCESS',
    company:company,
    message:message
  }
}

export const addNewCompanyRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_COMPANY_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchCompanies = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchCompaniesRequest());
    // Returns a promise
    return fetch(apiUrl+'manage/companies')
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchCompaniesSuccess(data.companies,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchCompaniesFailed(error));
                    })
                  }
                })


  }
}

export const fetchCompaniesRequest = () => {
  return {
    type:'FETCH_COMPANIES_REQUEST'
  }
}


//Sync action
export const fetchCompaniesSuccess = (companies,message) => {
  return {
    type: 'FETCH_COMPANIES_SUCCESS',
    companies: companies,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchCompaniesFailed = (error) => {
  return {
    type:'FETCH_COMPANIES_FAILED',
    error
  }
}

export const fetchCompanyById = (companyId) => {
  return (dispatch) => {
    dispatch(fetchCompanyRequest());
      // Returns a promise
      return fetch(apiUrl + 'manage/companies/' +companyId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchCompanySuccess(data.company[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchCompanyFailed(error));
                 })
               }
             })

  }
}

export const fetchCompanyRequest = () => {
  return {
    type:'FETCH_COMPANY_REQUEST'
  }
}


//Sync action
export const fetchCompanySuccess = (company,message) => {
  return {
    type: 'FETCH_COMPANY_SUCCESS',
    company: company,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchCompanyFailed = (error) => {
  return {
    type:'FETCH_COMPANY_FAILED',
    error
  }
}

export const showEditModal = (companyToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    company:companyToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editCompany = (company) => {
    return (dispatch) => {
      dispatch(editCompanyRequest(company));
      return fetch(apiUrl, {
        method:'put',
        body:company
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editCompanySuccess(data.company,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editCompanyFailed(error));
          })
        }
      })
    }
}

export const editCompanyRequest = (company) => {
   return {
     type:'EDIT_COMPANY_REQUEST',
     company
   }
}

export const editCompanySuccess = (company,message) => {
  return {
    type:'EDIT_COMPANY_SUCCESS',
    company:company,
    message:message
  }
}

export const editCompanyFailed = (error) => {
  return {
    type:'EDIT_COMPANY_FAILED',
    error
  }
}

export const deleteCompany = (company) => {
  return (dispatch) => {
    dispatch(deleteCompanyRequest(company));
    return fetch(apiUrl + 'manage/companies/' +company._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteCompanySuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteCompanyFailed(error));
        })
      }
    })

  }
}

export const deleteCompanyRequest = (company) => {
   return {
     type:'DELETE_COMPANY_REQUEST',
     company
   }
}

export const deleteCompanySuccess = (message) => {
  return {
    type:'DELETE_COMPANY_SUCCESS',
    message:message
  }
}

export const deleteCompanyFailed = (error) => {
  return {
    type:'DELETE_COMPANY_FAILED',
    error
  }
}

export const showDeleteModal = (companyToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    company:companyToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}

export const uploadCompaniesRequest = (companies) => {
  return {
    type:'UPLOAD_COMPANIES_REQUEST',
    companies: companies

  }
}

export const uploadCompaniesRequestSuccess = (companies,message) => {
    return {
        type: 'UPLOAD_COMPANIES_SUCCESS',
        companies:companies,
        message:message
    }
}

export const uploadCompaniesRequestFailed = (error) => {
    return {
        type: 'UPLOAD_COMPANIES_FAILED',
        error
    }
}
