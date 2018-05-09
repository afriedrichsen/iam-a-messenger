// ./react-redux-client/src/actions/templateActions.js

const apiUrl = "/messenger/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TEMPLATE'
  }
}

export const addNewTemplate = (template) => {console.log(template)
  return (dispatch) => {
    dispatch(addNewTemplateRequest(template));
    return fetch(apiUrl, {
      method:'post',
      body: template,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.template);
          dispatch(addNewTemplateRequestSuccess(data.template, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewTemplateRequestFailed(error))
        })
      }
    })
  }
}

export const addNewTemplateRequest = (template) => {
  return {
    type: 'ADD_NEW_TEMPLATE_REQUEST',
    template
  }
}

export const addNewTemplateRequestSuccess = (template,message) => {
  return {
    type: 'ADD_NEW_TEMPLATE_REQUEST_SUCCESS',
    template:template,
    message:message
  }
}

export const addNewTemplateRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_TEMPLATE_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchTemplates = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchTemplatesRequest());
    // Returns a promise
    return fetch(apiUrl+'manage/templates')
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchTemplatesSuccess(data.templates,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchTemplatesFailed(error));
                    })
                  }
                })


  }
}

export const fetchTemplatesRequest = () => {
  return {
    type:'FETCH_TEMPLATES_REQUEST'
  }
}


export const submitTemplatesBatch = (templates) => {console.log(templates)
    return (dispatch) => {
        dispatch(uploadTemplatesRequest(templates));
        return fetch(apiUrl+'manage/users/upload', {
            method:'post',
            body: templates,
            processData:false,
            contentType: false
        }).then(response => {
            if(response.ok){
                response.json().then(data => {console.log(data.templates);
                    dispatch(addNewTemplateRequestSuccess(data.templates, data.message))
                })
            }
            else{
                response.json().then(error => {
                    dispatch(addNewTemplateRequestFailed(error))
                })
            }
        })
    }
}


//Sync action
export const fetchTemplatesSuccess = (templates,message) => {
  return {
    type: 'FETCH_TEMPLATES_SUCCESS',
    templates: templates,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchTemplatesFailed = (error) => {
  return {
    type:'FETCH_TEMPLATES_FAILED',
    error
  }
}

export const fetchTemplateById = (templateId) => {
  return (dispatch) => {
    dispatch(fetchTemplateRequest());
      // Returns a promise
      return fetch(apiUrl + 'manage/templates/' +templateId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchTemplateSuccess(data.template, data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchTemplateFailed(error));
                 })
               }
             })

  }
}

export const fetchTemplateRequest = () => {
  return {
    type:'FETCH_TEMPLATE_REQUEST'
  }
}


//Sync action
export const fetchTemplateSuccess = (template,message) => {
  return {
    type: 'FETCH_TEMPLATE_SUCCESS',
    template: template,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchTemplateFailed = (error) => {
  return {
    type:'FETCH_TEMPLATE_FAILED',
    error
  }
}

export const showEditModal = (templateToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    template:templateToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editTemplate = (template) => {
    alert(template.id);
    return (dispatch) => {
      dispatch(editTemplateRequest(template));
      return fetch(apiUrl+ 'manage/templates/' + template.id, {
        method:'patch',
        body:template
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editTemplateSuccess(data.template,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editTemplateFailed(error));
          })
        }
      })
    }
}

export const editTemplateRequest = (template) => {
   return {
     type:'EDIT_TEMPLATE_REQUEST',
     template
   }
}

export const editTemplateSuccess = (template,message) => {
  return {
    type:'EDIT_TEMPLATE_SUCCESS',
    template:template,
    message:message
  }
}

export const editTemplateFailed = (error) => {
  return {
    type:'EDIT_TEMPLATE_FAILED',
    error
  }
}

export const deleteTemplate = (template) => {
  return (dispatch) => {
    dispatch(deleteTemplateRequest(template));
    return fetch(apiUrl + 'manage/templates/' +template._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteTemplateSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteTemplateFailed(error));
        })
      }
    })

  }
}

export const deleteTemplateRequest = (template) => {
   return {
     type:'DELETE_TEMPLATE_REQUEST',
     template
   }
}

export const deleteTemplateSuccess = (message) => {
  return {
    type:'DELETE_TEMPLATE_SUCCESS',
    message:message
  }
}

export const deleteTemplateFailed = (error) => {
  return {
    type:'DELETE_TEMPLATE_FAILED',
    error
  }
}

export const showDeleteModal = (templateToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    template:templateToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}

export const uploadTemplatesRequest = (templates) => {
  return {
    type:'UPLOAD_TEMPLATES_REQUEST',
    templates: templates

  }
}

export const uploadTemplatesRequestSuccess = (templates,message) => {
    return {
        type: 'UPLOAD_TEMPLATES_SUCCESS',
        templates:templates,
        message:message
    }
}

export const uploadTemplatesRequestFailed = (error) => {
    return {
        type: 'UPLOAD_TEMPLATES_FAILED',
        error
    }
}
