// ./react-redux-client/src/containers/Guest.js
import { connect } from 'react-redux';
import * as todoActions from '../actions/guestActions';
import Guest from '../components/Guest';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedGuestState: state.guestState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchGuestById: guestId => dispatch(todoActions.fetchGuestById(guestId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Guest);
