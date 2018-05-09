// ./react-redux-client/src/components/GuestEditForm.jss
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const GuestEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.editGuest}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>First name: </ControlLabel>
          <input type="hidden" value={props.guestData._id} name="id"/>
            <FormControl
              type="text" placeholder="First Name"
              name="firstName" defaultValue={props.guestData.firstName}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Last Name: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Last Name"
                  name="lastName" defaultValue={props.guestData.lastName}
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
