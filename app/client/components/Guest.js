import React from 'react';

class Guest extends React.Component {
    constructor() {
        super();
    }

    render () {
        let guests = this.props.state.guests;
        let optionItems = guests.map((guest) =>
            <option key={guest.firstName}>{guest.firstName}</option>
        );

        return (
            <div>
                <select>
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default Guest;