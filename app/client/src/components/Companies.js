// ./react-redux-client/src/components/Companies.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import CompanyEditForm from './CompanyEditForm';

export default class Companies extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditCompany = this.submitEditCompany.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.confirmDeleteCompany = this.confirmDeleteCompany.bind(this);
  }

  componentWillMount(){
    this.props.fetchCompanies();
  }


  showEditModal(companyToEdit){
     this.props.mappedshowEditModal(companyToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditCompany(e){
    e.preventDefault();
    const editForm = document.getElementById('EditTodoForm');
    if(editForm.todoText.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
     data.append('todoText', editForm.todoText.value);
      data.append('todoDesc', editForm.todoDesc.value);
      this.props.mappedEditCompany(data);
    }
    else{
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(companyToDelete){
    this.props.mappedshowDeleteModal(companyToDelete);
  }

  confirmDeleteCompany(){
    this.props.mappedDeleteCompany(this.props.mappedCompanyState.companyToDelete);
  }

  render(){
    const companyState = this.props.mappedCompanyState;
    const companies = companyState.companies;
    const editTodo = companyState.companyToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Companies</h3>
      {!companies && companyState.isFetching &&
        <p>Loading companies....</p>
      }
      {companies.length <= 0 && !companyState.isFetching &&
        <p>No Hotels/Companies/Locations Available. Add A Hotel/Company/Location to List here.</p>
      }
      {companies && companies.length > 0 && !companyState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Companies</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {companies.map((todo,i) => <tr key={i}>
        <td>{todo.company}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(todo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(todo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/manage/companies/${todo._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }

    {/* Modal for editing todo */}
    <Modal
      show={companyState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editTodo  &&
    <CompanyEditForm companyData={editTodo} editTodo={this.submitEditCompany} />
    }
    {editTodo  && companyState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editTodo  && !companyState.isFetching && companyState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {companyState.error} </strong>
      </Alert>
    }
    {editTodo  && !companyState.isFetching && companyState.successMsg &&
      <Alert bsStyle="success">
  Book <strong> {editTodo.todoText} </strong>{companyState.successMsg}
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
    show={companyState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Company?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {companyState.companyToDelete && !companyState.error && !companyState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this company <strong>{companyState.companyToDelete.lastName + ', ' + companyState.companyToDelete.firstName} </strong> ?
</Alert>
    }
    {companyState.companyToDelete && companyState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{companyState.error} </strong>
</Alert>
    }

    {companyState.companyToDelete && !companyState.error && companyState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!companyState.companyToDelete && !companyState.error && !companyState.isFetching &&
      <Alert bsStyle="success">
 Company Deleted!<strong>{companyState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!companyState.successMsg && !companyState.isFetching &&
       <div>
       <Button onClick={this.confirmDeleteCompany}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {companyState.successMsg && !companyState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}
