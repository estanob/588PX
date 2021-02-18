import React from 'react';
import { connect } from 'react-redux';

const mSTP = ({ errors, session }) => {
  return {
    errors: Object.values(errors.pictures),
    picture: {
      title: '',
      location: '',
      caption: '',
      gallery: '',
      uploader_id: session.id
    },
    formType: 'Upload Picture'
  }
}

const mDTP = dispatch => {
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