import React from 'react';
import { connect } from 'react-redux';
import PictureForm from './picture_form';
import { createPicture } from '../../actions/picture_actions';

const mSTP = ({ state, session }) => {
  return {
    errors: Object.values(state.errors.pictures),
    picture: {
      title: '',
      location: '',
      caption: '',
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