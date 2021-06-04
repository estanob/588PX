import React from 'react';
import { connect } from 'react-redux';
import PictureForm from './picture_form';
import { createPicture } from '../../actions/picture_actions';

const mSTP = (state) => {
  return {
    errors: state.errors.picture,
    picture: {
      title: '',
      location: '',
      caption: '',
    },
    formType: 'Upload Picture',
  }
}

const mDTP = dispatch => {
  return {
    action: picture => dispatch(createPicture(picture)),
  }
}

export default connect(mSTP, mDTP)(PictureForm);