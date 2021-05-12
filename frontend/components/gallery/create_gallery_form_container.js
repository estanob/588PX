import React from 'react';
import { connect } from 'react-redux';
import { createGallery } from '../../actions/gallery_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryForm from './gallery_form';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : {};
  debugger
  return {
    session: session,
    thisUser: thisUser,
    errors: state.errors.galleries,
    gallery: {
      title: '',
    },
    userPicIds: thisUser.pictures,
    pictures: pictures,
    formType: 'Create Gallery'
  };
};

const mDTP = dispatch => {
  return {
    action: gallery => dispatch(createGallery(gallery)),
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(GalleryForm);