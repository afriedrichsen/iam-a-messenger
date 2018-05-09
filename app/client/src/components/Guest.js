// ./react-redux-client/src/components/Guest.js
import React from 'react';

export default class Guest extends React.Component {
  componentDidMount(){
    this.props.mappedfetchGuestById(this.props.params.id);
  }

  render(){
    const guestState = this.props.mappedGuestState;
    return(
      <div className="guestDetail">
       <h2>Guest Detail</h2>
         {!guestState.guest && guestState.isFetching &&
           <div>
             <p>Loading guest....</p>
           </div>
         }
       {guestState.guest && !guestState.isFetching &&
         <div>
           <h3>{guestState.guest.firstName + ' ' + guestState.guest.lastName}</h3>
           <p></p>
         </div>
       }
      </div>
    );
  }
}
