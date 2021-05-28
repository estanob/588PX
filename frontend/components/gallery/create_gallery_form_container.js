import React from 'react';
import { connect } from 'react-redux';
import { createGallery } from '../../actions/gallery_actions';
import { createPicturesToGallery } from '../../actions/pictures_to_gallery_actions';
import { fetchPictures } from '../../actions/picture_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import GalleryForm from './gallery_form';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities ? state.entities.users[session] : {};
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
    // make default state for display image to be [0] automatically selected
  };
};

const mDTP = (dispatch, ownProps) => {
  debugger
  return {
    action: (gallery) => dispatch(createGallery(gallery)),
    fetchPictures: () => dispatch(fetchPictures()),
    createPicturesToGallery: (picsToGal) => dispatch(createPicturesToGallery(picsToGal)),
    openModal: () => dispatch(openModal()),
    galleryImageModal: (
      <button
        className="gallery-image-button"
        onClick={() => dispatch(openModal('gallery'))}>
        Select Display Image
      </button>
    ),
  };
};

export default connect(mSTP, mDTP)(GalleryForm);