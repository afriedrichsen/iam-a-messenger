// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import Home from '../components/Home';
import * as guestActions from '../actions/guestActions';
import * as companyActions from "../actions/companyActions";
import * as templateActions from "../actions/templateActions";

// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedAppState: state.appState,
        mappedGuestState: state.guestState,
        mappedCompanyState: state.companyState,
        mappedTemplateState: state.templateState,
     //   mappedToggleSelectGuest: state.toggleMessageSelectGuest,
    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        mappedToggleAddGuest: () => dispatch(appActions.toggleAddGuest()),
        fetchGuests: () => dispatch(guestActions.fetchGuests()),
        fetchCompanies: () => dispatch(companyActions.fetchCompanies()),
        fetchTemplates: () => dispatch(templateActions.fetchTemplates()),
        mappedAddGuest: todo => dispatch(guestActions.addNewGuest(todo)),
        mappedToggleSelectGuest: guestSelection => dispatch(appActions.toggleGuestHomeMenu(guestSelection)),
        mappedToggleSelectCompany: companySelection => dispatch(appActions.toggleCompanyHomeMenu(companySelection)),
        mappedToggleSelectTemplate: templateSelection => dispatch(appActions.toggleTemplateHomeMenu(templateSelection)),
        mappedMessageSend: message => dispatch(appActions.sendMessage(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);