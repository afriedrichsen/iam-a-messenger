// ./react-redux-client/src/components/GuestForm.jss
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const GuestForm = (props) => {
  return (
    <form className="form form-horizontal" id="addTodoForm" onSubmit={props.addTodo}>
    <div className="row">
    <h3 className="centerAlign">Add Guest</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Guest: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter todo"
              name="todoText"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="todoDesc"
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

export default GuestForm;
