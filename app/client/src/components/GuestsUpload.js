import React from 'react';
import GuestUploader from './GuestUploader';


export default class GuestUpload extends React.Component {

    constructor(props) {
        super(props);
        this.submitGuestFile = this.submitGuestFile.bind(this);
    }


    submitGuestFile(e) {
        e.preventDefault();
        const editForm = document.getElementById('UploadGuestsForm');
        alert(editForm.value);
        if(editForm.guestFile.value !=="") {

            const data = new FormData();
           // data.append('id', editForm.id.value);
            data.append('guests', editForm.guestFile.value);
            this.props.mappedGuestUpload(data);

        } else {
            return;
        }

    }

    render()
    {
        return (<div>Upload users here.

            <div>
                <h2> File upload </h2>
                <GuestUploader/>
            </div>
        </div>)
    }
}
