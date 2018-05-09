// ./react-redux-client/src/components/Guest.js
import React from 'react';

export default class Template extends React.Component {
  componentDidMount(){
    this.props.mappedfetchTemplateById(this.props.params.id);
  }

  render(){
    const templateState = this.props.mappedTemplateState;
    return(
      <div className="templateDetail">
       <h2>Template Detail</h2>
         {!templateState.template && templateState.isFetching &&
           <div>
             <p>Loading template....</p>
           </div>
         }
       {templateState.template && !templateState.isFetching &&
         <div>
           <h3>{templateState.template.messageType}</h3>
           <p>{templateState.template.messageBody}</p>
         </div>
       }
      </div>
    );
  }
}
