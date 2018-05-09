// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import GuestsUpload from '../components/GuestsUpload';
import * as todoActions from '../actions/guestActions';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedAppState: state.appState
    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
  //      mappedToggleAddGuest: () => dispatch(appActions.toggleAddGuest()),
  //      mappedAddGuest: todo => dispatch(todoActions.addNewGuest(todo)),
        mappedGuestUpload: guests => dispatch(todoActions.submitGuestsBatch(guests))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GuestsUpload);