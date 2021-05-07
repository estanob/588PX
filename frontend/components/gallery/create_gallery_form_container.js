import React from 'react';
import { connect } from 'react-redux';
import { createGallery } from '../../actions/gallery_actions';
import GalleryForm from './gallery_form';

const mSTP = (state) => {
  return {
    errors: state.errors.galleries,
    gallery: {
      title: '',
    },
    formType: 'Create Gallery'
  };
};

const mDTP = dispatch => {
  return {
    action: gallery => dispatch(createGallery(gallery)),
  };
};

export default connect(mSTP, mDTP)(GalleryForm);