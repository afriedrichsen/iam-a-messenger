// ./react-redux-client/src/containers/Guests.js
import { connect } from 'react-redux';
import * as guestActions from '../actions/guestActions';
import Guests from '../components/Guests';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedGuestState: state.guestState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchGuests: () => dispatch(guestActions.fetchGuests()),
    mappedEditGuest: guestToEdit => dispatch(guestActions.editGuest(guestToEdit)),
    mappedshowEditModal: guestToEdit => dispatch(guestActions.showEditModal(guestToEdit)),
    mappedhideEditModal: () => dispatch(guestActions.hideEditModal()),
    mappedDeleteGuest: guestToDelete => dispatch(guestActions.deleteGuest(guestToDelete)),
    mappedshowDeleteModal: guestToDelete => dispatch(guestActions.showDeleteModal(guestToDelete)),
    mappedhideDeleteModal: () => dispatch(guestActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Guests);
