// ./react-redux-client/src/components/Home.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal,DropdownButton,MenuItem,Form,FormGroup,Field,Label,ControlLabel,FormControl } from 'react-bootstrap';
import {reduxForm} from 'redux-form';


export default class Home extends React.Component {
  constructor(props){
    super(props);
    //this.state = {value: 'Select a guest...'}
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditGuest = this.submitEditGuest.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.confirmDeleteGuest = this.confirmDeleteGuest.bind(this);
    this.handleGuestSelection = this.handleGuestSelection.bind(this);
    this.handleCompanySelection = this.handleCompanySelection.bind(this);
    this.handleTemplateSelection = this.handleTemplateSelection.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);

  }

  componentWillMount(){
    this.props.fetchGuests();
    this.props.fetchCompanies();
    this.props.fetchTemplates();
  }


  showEditModal(guestToEdit){
     this.props.mappedshowEditModal(guestToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditGuest(e){
    e.preventDefault();
    const editForm = document.getElementById('EditTodoForm');
    if(editForm.firstName.value !== "" || editForm.lastName.value !== "") {
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('firstName', editForm.firstName.value);
      data.append('lastName', editForm.lastName.value);
      this.props.mappedEditGuest(data);
    }
    else{
      return;
    }

  }

  handleMessageSend(e, evtKey) {
    e.preventDefault();
    const messageForm = document.getElementById('messageForm');
    if(messageForm.guestSelect.value !== "" && messageForm.companySelect.value !== "" && messageForm.templateSelect.value!=="") {

      const data = new FormData();
      data.append('userId',messageForm.guestSelect.value);
      data.append('companyId',messageForm.companySelect.value);

      if(messageForm.templateSelect.value=='other') {
        data.append('otherMessage',messageForm.otherInput.value);
        //alert('others')
      }
      else {
         data.append('messageId',messageForm.templateSelect.value);
      }

      this.props.mappedMessageSend(data);

    } else {
      return;
    }



  }

  handleGuestSelection(e, evtKey) {
          //alert(evtKey);
        //  e.preventDefault();
        this.props.mappedToggleSelectGuest(e.target.value);
        //alert(evtKey);

    }

  handleCompanySelection(e, evtKey) {
        //  alert(e);
        //  e.preventDefault();
        this.props.mappedToggleSelectCompany(e.target.value);
        //alert(evtKey);

  }

  handleTemplateSelection(e) {

        if(e.target.value == 'other') {
           // this.props.mappedToggleSelectTemplate(e.target.value);
            this.props.mappedToggleOtherInputSelected()

        } else {
            this.props.mappedToggleSelectTemplate(e.target.value);
            this.props.unmapToggleOtherInputSelected()
        }

    }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(guestToDelete){
    this.props.mappedshowDeleteModal(guestToDelete);
  }

  confirmDeleteGuest(){
    this.props.mappedDeleteGuest(this.props.mappedGuestState.guestToDelete);
  }

  render(){
    //const appState = this.props.mappedAppState;
    const guestState = this.props.mappedGuestState;
    const companyState = this.props.mappedCompanyState;
    const templateState = this.props.mappedTemplateState;
    const companies = companyState.companies;
    const guests = guestState.guests;
    const templates = templateState.templates;
    const editGuest = guestState.guestToEdit;


    return(
      <div className="col-md-12">
        <div className="row">
      <h3 className="centerAlign">Send Message</h3>
      </div>
          <div className="row">
            <form id="messageForm" onSubmit={this.handleMessageSend}>
              <div className="row">
              <label>
                Select Guest:
                <select name="guestSelect" onChange={this.handleGuestSelection}>
                    <option value="initial">---------------------------</option>
                    {!guests && guestState.isFetching &&
                    <p>Loading guests....</p>
                    }
                    {guests.length <= 0 && !guestState.isFetching &&
                    <p>No Guests Available. Add A Guest to List here.</p>
                    }
                    {guests && guests.length > 0 && !guestState.isFetching &&

                        guests.map((guest,i) => <option value={guest._id} id={i}>{guest.firstName + " " + guest.lastName}</option>)
                        }

                    }
                </select>
              </label>
              </div>
              <div className="row">
              <label>
                  Select Company:
                  <select name="companySelect" onChange={this.handleCompanySelection}>
                      <option value="initial">---------------------------</option>
                      {!companies && companyState.isFetching &&
                      <p>Loading companies...</p>
                      }
                      {companies.length <= 0 && !companyState.isFetching &&
                      <p>No Comapnies Available. Add A Guest to List here.</p>
                      }
                      {companies && guests.length > 0 && !companyState.isFetching &&

                      companies.map((company,i) => <option value={company._id} id={i}>{company.company}</option>)
                      }

                      }
                  </select>
              </label>
              </div>
                <div className="row">
              <label>
                  Select Message Template:
                  <select className="selectpicker" name="templateSelect" id="test" onChange={this.handleTemplateSelection}>
                      <option value="initial">---------------------------</option>
                      {!templates && templateState.isFetching &&
                      <p>Loading guests....</p>
                      }
                      {templates.length <= 0 && !templateState.isFetching &&
                      <p>No Guests Available. Add A Guest to List here.</p>
                      }
                      {templates && templates.length > 0 && !templateState.isFetching &&

                      templates.map((template,i) => <option ballsohard="motherfuckers" value={template._id} id={i} label={template.messageType}>{template.messageType}</option>)
                      }

                      }
                      <option value="other">Write Custom Message.</option>
                  </select>

              </label>
                </div>
                {this.props.mappedAppState.showOtherInputBox &&
                    <div className="row">
                        <label>
                            Input your custom message.
                            <textarea name="otherInput"/>
                        </label>
                    </div>
                }
              <div className="row">
                <div className="col-md-6">
              <Button type="submit" bsStyle="success" bsSize="large" block>Send</Button>
                </div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}
