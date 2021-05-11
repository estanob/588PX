import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FollowersModal from './followers_modal';
import FollowingModal from './following_modal';

function Modal({ session, thisUser, allUsers, modal, closeModal }) {

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
  // debugger
  return {
    modal: state.ui.modal,
    allUsers: Object.values(state.entities.user),
    thisUser: state.entities.users,
    session: state.session.id,
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);