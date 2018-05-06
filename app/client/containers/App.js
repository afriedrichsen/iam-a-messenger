import { connect } from 'react-redux';
import * as guestActions from '../actions/guestActions';

import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        mappedAppState: this.props.mappedAppState
    }
}