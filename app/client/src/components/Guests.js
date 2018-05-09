// ./react-redux-client/src/components/Guests.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import GuestEditForm from './GuestEditForm';

export default class Guests extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditGuest = this.submitEditGuest.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.confirmDeleteGuest = this.confirmDeleteGuest.bind(this);
  }

  componentWillMount(){
    this.props.fetchGuests();
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
    if(editForm.firstName.value !== "" || editForm.lastName.value !== ""){
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
    const guests = guestState.guests;
    const editGuest = guestState.guestToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Guests</h3>
      {!guests && guestState.isFetching &&
        <p>Loading guests....</p>
      }
      {guests.length <= 0 && !guestState.isFetching &&
        <p>No Guests Available. Add A Guest to List here.</p>
      }
      {guests && guests.length > 0 && !guestState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Todo</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {guests.map((todo,i) => <tr key={i}>
        <td>{todo.firstName + " " + todo.lastName}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(todo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(todo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/manage/guests/${todo._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }

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
