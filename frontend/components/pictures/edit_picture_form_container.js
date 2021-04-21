import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors, deletePicture, fetchPicture, updatePicture } from '../../actions/picture_actions';
import React from 'react';
import EditPictureForm from './edit_picture_form';

const mSTP = ( state, ownProps ) => {
  debugger
  let picture = state.entities ? state.entities.pictures[ownProps.match.params.id] : '';
  let err = state.errors.picture ? Object.values(state.errors.picture) : [];

  return {
    errors: err,
    picture: picture,
    session: state.session.id,
    formType: 'Edit Picture'
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
    deletePicture: pictureId => dispatch(deletePicture(pictureId)),
    action: picture => dispatch(updatePicture(picture)),
    cancelModal: (
      <input type="button"
        className='cancel-button'
        value='Cancel'
        onClick={() => dispatch(openModal('cancel'))} />
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(EditPictureForm);