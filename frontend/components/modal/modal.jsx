import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FollowersModal from './followers_modal';
import FollowingModal from './following_modal';
import CreatorModal from './creator_modal';

function Modal (props) {
  const { 
    creator,
    session, 
    thisUser,
    allUsers, 
    modal, 
    closeModal, 
    pictures, 
    galleries, } = props;
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
    // case 'creator':
    //   component = <CreatorModal
    //                 creator={creator}
    //                 allUsers={allUsers} 
    //                 closeModal={closeModal}
    //                 session={session}
    //                 pictures={pictures}
    //                 galleries={galleries} />;
    //   break;
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
  const pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  const galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  return {
    modal: state.ui.modal,
    creator: '',
    allUsers: allUsers,
    thisUser: thisUser,
    session: session,
    pictures: pictures,
    galleries: galleries,
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);