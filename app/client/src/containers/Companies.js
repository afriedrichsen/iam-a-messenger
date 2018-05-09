// ./react-redux-client/src/containers/Guests.js
import { connect } from 'react-redux';
import * as companyActions from '../actions/companyActions';
import Companies from '../components/Companies';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedCompanyState: state.companyState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchCompanies: () => dispatch(companyActions.fetchCompanies()),
    mappedEditCompany: companyToEdit => dispatch(companyActions.editCompany(companyToEdit)),
    mappedshowEditModal: companyToEdit => dispatch(companyActions.showEditModal(companyToEdit)),
    mappedhideEditModal: () => dispatch(companyActions.hideEditModal()),
    mappedDeleteCompany: companyToDelete => dispatch(companyActions.deleteCompany(companyToDelete)),
    mappedshowDeleteModal: companyToDelete => dispatch(companyActions.showDeleteModal(companyToDelete)),
    mappedhideDeleteModal: () => dispatch(companyActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Companies);
