import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FollowersModal from './followers_modal';
import FollowingModal from './following_modal';

function Modal (props) {
  const { session, thisUser, allUsers, modal, closeModal } = props;
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'followers':
      component = <FollowersModal 
                    thisUser={thisUser}
                    allUsers={allUsers} 
                    closeModal={closeModal}
                    session={session} />;
      break;
    case 'following':
      component = <FollowingModal 
                    thisUser={thisUser}
                    allUsers={allUsers} 
                    closeModal={closeModal}
                    session={session} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

// Modal Container:
const mSTP = state => {
  const allUsers = state.entities.user ? Object.values(state.entities.user) : {};
  const thisUser = state.entities.users ? state.entities.users : {};
  const session = state.session.id ? state.session.id : '';
  return {
    modal: state.ui.modal,
    allUsers: allUsers,
    thisUser: thisUser,
    session: session,
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);