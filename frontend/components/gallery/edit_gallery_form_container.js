import React from 'react';
import { connect } from 'react-redux';
import { fetchGallery, fetchGalleries } from '../../actions/gallery_actions';
import { fetchPictures } from '../../actions/picture_actions';
import { createPicturesToGallery, deletePicturesToGallery, fetchPicturesToGalleries } from '../../actions/pictures_to_gallery_actions';
import EditGalleryForm from './edit_gallery_form';

const mSTP = (state, ownProps) => {
  let gallery = state.entities.galleries ? state.entities.galleries[ownProps.match.params.id] : {};
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities.users ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : {};
  return {
    gallery: gallery,
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
    formType: 'Edit Gallery'
  };
};

const mDTP = (dispatch) => {
  return {
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchGalleries: () => dispatch(fetchGalleries()),
    createPicturesToGallery: (picsToGal) => dispatch(createPicturesToGallery(picsToGal)),
    deletePicturesToGallery: picsToGal => dispatch(deletePicturesToGallery(picsToGal)),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
  };
};

export default connect(mSTP, mDTP)(EditGalleryForm);