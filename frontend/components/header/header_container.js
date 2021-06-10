import { connect } from 'react-redux';
import { clearErrors, logout } from '../../actions/session_actions';
import Header from './header';

const mSTP = (state, ownProps) => {
  let session = state.session ? state.session.id : '';
  let currentUser = state.entities.users ? state.entities.users[session] : [];
  return {
    session: session,
    currentUser: currentUser,
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(Header);