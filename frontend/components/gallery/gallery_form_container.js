import React from 'react';
import { connect } from 'react-redux';
import { createGallery } from '../../actions/gallery_actions';
import { createPicturesToGallery } from '../../actions/pictures_to_gallery_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryForm from './gallery_form';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities.users ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : {};
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

const mDTP = (dispatch) => {
  return {
    createGallery: (gallery) => dispatch(createGallery(gallery)),
    fetchPictures: () => dispatch(fetchPictures()),
    createPicturesToGallery: (picsToGal) => dispatch(createPicturesToGallery(picsToGal)),
  };
};

export default connect(mSTP, mDTP)(GalleryForm);