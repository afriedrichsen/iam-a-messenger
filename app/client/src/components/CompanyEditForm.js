// ./react-redux-client/src/components/GuestEditForm.jss
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const CompanyEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.editCompany}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Company: </ControlLabel>
          <input type="hidden" value={props.companyData._id} name="id"/>
            <FormControl
              type="text" placeholder="Company Name"
              name="companyText" defaultValue={props.companyData.company}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="companyDesc" defaultValue={props.companyData.timezone}
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

export default CompanyEditForm;
