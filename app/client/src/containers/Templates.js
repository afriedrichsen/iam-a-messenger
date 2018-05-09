// ./react-redux-client/src/containers/Guests.js
import { connect } from 'react-redux';
import * as templateActions from '../actions/templateActions';
import Templates from '../components/Templates';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedTemplateState: state.templateState
    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        fetchTemplates: () => dispatch(templateActions.fetchTemplates()),
        mappedEditTemplate: templateToEdit => dispatch(templateActions.editTemplate(templateToEdit)),
        mappedshowEditModal: templateToEdit => dispatch(templateActions.showEditModal(templateToEdit)),
        mappedhideEditModal: () => dispatch(templateActions.hideEditModal()),
        mappedDeleteTemplate: templateToDelete => dispatch(templateActions.deleteTemplate(templateToDelete)),
        mappedshowDeleteModal: templateToDelete => dispatch(templateActions.showDeleteModal(templateToDelete)),
        mappedhideDeleteModal: () => dispatch(templateActions.hideDeleteModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Templates);