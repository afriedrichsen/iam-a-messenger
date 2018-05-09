// ./react-redux-client/src/containers/Guest.js
import { connect } from 'react-redux';
import * as companyActions from '../actions/companyActions';
import Company from '../components/Company';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedCompanyState: state.companyState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchCompanyById: companyId => dispatch(companyActions.fetchCompanyById(companyId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Company);
