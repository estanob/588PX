import { connect } from 'react-redux';
import { clearErrors, logout } from '../../actions/session_actions';
import Header from './header';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    users: state.entities.users,
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(Header);