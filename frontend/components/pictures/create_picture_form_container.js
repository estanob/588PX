import React from 'react';
import { connect } from 'react-redux';
import PictureForm from './picture_form';
import { createPicture } from '../../actions/picture_actions';

const mSTP = (state) => {
  debugger
  let errs = state.errors.pictures ? Object.values(state.errors.pictures) : [];
  return {
    errors: errs,
    picture: {
      title: '',
      location: '',
      caption: '',
      uploader_id: state.entities.users.id,
    },
    formType: 'Upload Picture',
  }
}

const mDTP = dispatch => {
  debugger
  return {
    action: picture => dispatch(createPicture(picture)),
    cancelModal: (
      <input 
        type="button" 
        className="cancel-button" 
        value="Cancel"
        onClick={() => dispatch(openModal('cancel'))}/>
    ),
    removeModal: () => dispatch(openModal('remove')),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(PictureForm);