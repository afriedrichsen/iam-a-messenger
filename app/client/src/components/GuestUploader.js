import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const GuestForm = (props) => {
    return (
        <form className="form form-horizontal" id="uploadGuestsForm" onSubmit={props.submitGuestsBatch}>
            <div className="row">
                <h3 className="centerAlign">Upload Guests</h3>
                <div className="col-md-12">
                    <FormGroup>
                        <ControlLabel>Guest File: </ControlLabel>
                        <FormControl
                            type="file" placeholder="Browse for todo"
                            name="guestFile"
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
