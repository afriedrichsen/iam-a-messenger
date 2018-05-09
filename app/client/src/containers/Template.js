// ./react-redux-client/src/containers/Guest.js
import { connect } from 'react-redux';
import * as templateActions from '../actions/templateActions';
import Template from '../components/Template';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTemplateState: state.templateState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchTemplateById: templateId => dispatch(templateActions.fetchTemplateById(templateId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Template);
