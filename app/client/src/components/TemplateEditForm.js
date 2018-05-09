// ./react-redux-client/src/components/GuestEditForm.jss
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const GuestEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.editTemplate}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Message Template: </ControlLabel>
          <input type="hidden" value={props.templateData._id} name="id"/>
            <FormControl
              type="text" placeholder="First Name"
              name="templateText" defaultValue={props.templateData.messageType}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter message body"
                  name="templateDesc" defaultValue={props.templateData.messageBody}
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default GuestEditForm;
