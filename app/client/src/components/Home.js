// ./react-redux-client/src/components/Home.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal,DropdownButton,MenuItem,Form,FormGroup,Field,Label,ControlLabel,FormControl } from 'react-bootstrap';
import { Link } from 'react-router';
import GuestEditForm from './GuestEditForm';
//import SendMessageForm from './SendMessageForm';

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
      data.append('messageId',messageForm.templateSelect.value);

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

  handleTemplateSelection(e, evtKey) {
        //  alert(e);
        //  e.preventDefault();
        this.props.mappedToggleSelectTemplate(e.target.value);
        //alert(evtKey);

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
                  <select name="templateSelect" onChange={this.handleTemplateSelection}>
                      {!templates && templateState.isFetching &&
                      <p>Loading guests....</p>
                      }
                      {templates.length <= 0 && !templateState.isFetching &&
                      <p>No Guests Available. Add A Guest to List here.</p>
                      }
                      {templates && templates.length > 0 && !templateState.isFetching &&

                      templates.map((template,i) => <option value={template._id} id={i}>{template.messageType}</option>)
                      }

                      }
                      <option>Other</option>
                  </select>
              </label>
                </div>
              <div className="row">
                <div className="col-md-6">
              <Button type="submit" bsStyle="success" bsSize="large" block>Send</Button>
                </div>
                  <div className="col-md-6">

                  </div>
              </div>
            </form>
          </div>
    {/* Modal for editing todo */}
    <Modal
      show={guestState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Guest</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editGuest  &&
    <GuestEditForm guestData={editGuest} editGuest={this.submitEditGuest} />
    }
    {editGuest  && guestState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editGuest  && !guestState.isFetching && guestState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {guestState.error} </strong>
      </Alert>
    }
    {editGuest  && !guestState.isFetching && guestState.successMsg &&
      <Alert bsStyle="success">
  Book <strong> {editGuest.firstName} </strong>{guestState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

{/* Modal for deleting todo */}
    <Modal
    show={guestState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Guest?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {guestState.guestToDelete && !guestState.error && !guestState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this guest <strong>{guestState.guestToDelete.lastName + ', ' + guestState.guestToDelete.firstName} </strong> ?
</Alert>
    }
    {guestState.guestToDelete && guestState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{guestState.error} </strong>
</Alert>
    }

    {guestState.guestToDelete && !guestState.error && guestState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!guestState.guestToDelete && !guestState.error && !guestState.isFetching &&
      <Alert bsStyle="success">
 Guest Deleted!<strong>{guestState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!guestState.successMsg && !guestState.isFetching &&
       <div>
       <Button onClick={this.confirmDeleteGuest}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {guestState.successMsg && !guestState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}
