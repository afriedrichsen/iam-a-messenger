/*
import React from 'react';

class GuestUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false
        }
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }


    handleUploadImage(ev) {

    }

    render() {
        return(
            <div class="container">
                <form onSubmit={this.handleUpload}>
                    <div className="form-group">
                        <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
                    </div>

                    <div className="form-group">
                        <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
                    </div>

                    <button className="btn btn-success" type>Upload</button>

                </form>
            </div>
        )
    }
}

export default GuestUploader;
*/

// ./react-redux-client/src/components/GuestForm.jss
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
