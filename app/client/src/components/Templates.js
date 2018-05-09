// ./react-redux-client/src/components/Templates.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import TemplateEditForm from './TemplateEditForm';

export default class Templates extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditTemplate = this.submitEditTemplate.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.confirmDeleteTemplate = this.confirmDeleteTemplate.bind(this);
  }

  componentWillMount(){
    this.props.fetchTemplates();
  }


  showEditModal(templateToEdit){
     this.props.mappedshowEditModal(templateToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditTemplate(e){
    e.preventDefault();
    const editForm = document.getElementById('EditTemplateForm');
    if(editForm.templateText.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
     data.append('templateText', editForm.templateText.value);
      data.append('templateDesc', editForm.templateDesc.value);
      this.props.mappedEditTemplate(data);
    }
    else{
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(templateToDelete){
    this.props.mappedshowDeleteModal(templateToDelete);
  }

  confirmDeleteTemplate(){
    this.props.mappedDeleteTemplate(this.props.mappedTemplateState.templateToDelete);
  }

  render(){
    const templateState = this.props.mappedTemplateState;
    const templates = templateState.templates;
    const editTemplate = templateState.templateToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Templates</h3>
      {!templates && templateState.isFetching &&
        <p>Loading templates....</p>
      }
      {templates.length <= 0 && !templateState.isFetching &&
        <p>No Templates Available. Add A Template to List here.</p>
      }
      {templates && templates.length > 0 && !templateState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Template</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {templates.map((template,i) => <tr key={i}>
        <td>{template.messageType}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(template)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(template)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/manage/templates/${template._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }

    {/* Modal for editing template */}
    <Modal
      show={templateState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Template</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editTemplate  &&
    <TemplateEditForm templateData={editTemplate} editTemplate={this.submitEditTemplate} />
    }
    {editTemplate  && templateState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editTemplate  && !templateState.isFetching && templateState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {templateState.error} </strong>
      </Alert>
    }
    {editTemplate  && !templateState.isFetching && templateState.successMsg &&
      <Alert bsStyle="success">
  Book <strong> {editTemplate.templateText} </strong>{templateState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

{/* Modal for deleting template */}
    <Modal
    show={templateState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Template?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {templateState.templateToDelete && !templateState.error && !templateState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this template <strong>{templateState.templateToDelete.messageType} </strong> ?
</Alert>
    }
    {templateState.templateToDelete && templateState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{templateState.error} </strong>
</Alert>
    }

    {templateState.templateToDelete && !templateState.error && templateState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!templateState.templateToDelete && !templateState.error && !templateState.isFetching &&
      <Alert bsStyle="success">
 Template Deleted!<strong>{templateState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!templateState.successMsg && !templateState.isFetching &&
       <div>
       <Button onClick={this.confirmDeleteTemplate}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {templateState.successMsg && !templateState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}
