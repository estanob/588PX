import { connect } from 'react-redux';
import React from 'react';
import { deleteGallery, fetchGallery, updateGallery } from '../../actions/gallery_actions';
import EditGalleryForm from './edit_gallery_form';
import { fetchPictures } from '../../actions/picture_actions';

const mSTP = (state, ownProps) => {
  let gallery = state.entities ? state.entities.galleries[ownProps.match.params.id] : {};
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities.users ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : {};
  debugger
  return {
    session: session,
    gallery: gallery,
    thisUser: thisUser,
    userPicIds: thisUser.pictures,
    pictures: pictures,
    formType: 'Edit Gallery',
  };
};

const mDTP = dispatch => {
  return {
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
    deleteGallery: galleryId => dispatch(deleteGallery(galleryId)),
    fetchPictures: () => dispatch(fetchPictures()),
    action: gallery => dispatch(updateGallery(gallery)),
  };
};

export default connect(mSTP, mDTP)(EditGalleryForm);