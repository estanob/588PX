import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FollowersModal from './followers_modal';

function Modal({ modal, closeModal }) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'followers':
      component = <FollowersModal closeModal={closeModal} />;
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

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);