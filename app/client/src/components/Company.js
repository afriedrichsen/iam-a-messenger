// ./react-redux-client/src/components/Guest.js
import React from 'react';

export default class Company extends React.Component {
  componentDidMount(){
    this.props.mappedfetchCompanyById(this.props.params.id);
  }

  render(){
    const companyState = this.props.mappedCompanyState;
    return(
      <div className="companyDetail">
       <h2>Company Detail</h2>
         {!companyState.guest && companyState.isFetching &&
           <div>
             <p>Loading guest....</p>
           </div>
         }
       {companyState.company && !companyState.isFetching &&
         <div>
           <h3>{companyState.company.company}</h3>
           <p>{companyState.company.city}</p>
         </div>
       }
      </div>
    );
  }
}
