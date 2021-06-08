import React from 'react';
import { connect } from 'react-redux';
import { createGallery, fetchGalleries } from '../../actions/gallery_actions';
import { createPicturesToGallery, fetchPicturesToGalleries } from '../../actions/pictures_to_gallery_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryForm from './gallery_form';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities.users ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : {};
  return {
    session: session,
    thisUser: thisUser,
    errors: Object.values(state.errors.gallery),
    gallery: {
      title: '',
      description: '',
    },
    picturesToGalleries: Object.values(state.entities.picturesToGalleries),
    userPicIds: thisUser.pictures,
    pictures: pictures,
    galleries: galleries,
    formType: 'Create Gallery'
  };
};

const mDTP = (dispatch) => {
  return {
    createGallery: (gallery) => dispatch(createGallery(gallery)),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchGalleries: () => dispatch(fetchGalleries()),
    createPicturesToGallery: (picsToGal) => dispatch(createPicturesToGallery(picsToGal)),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
  };
};

export default connect(mSTP, mDTP)(GalleryForm);