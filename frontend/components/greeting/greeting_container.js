import { connect } from 'react-redux';

import { demoLogin, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.id,
  users: entities.users
});

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(demoLogin()),
    openModal: modal => dispatch(openModal(modal))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
