import React from 'react';
import { connect } from 'react-redux';
import EditPictureForm from '';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deletePicture, fetchPicture, updatePicture } from '../../actions/picture_actions';

const mSTP = ( state, ownProps ) => {
  return {
    errors: Object.values(state.errors.pictures),
    picture: state.entities.pictures[ownProps.match.params.pictureId],
    session: state.session.id,
    formType: 'Edit Picture'
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
    deletePicture: pictureId => dispatch(deletePicture(pictureId)),
    action: post => dispatch(updatePicture(picture)),
    cancelModal: (
      <input type="button"
        className='cancel-button'
        value='Cancel'
        onClick={() => dispatch(openModal('cancel'))} />
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditPictureForm);