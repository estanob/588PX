import { connect } from 'react-redux';
import React from 'react';
import { deleteGallery, fetchGallery, updateGallery } from '../../actions/gallery_actions';
import EditGalleryForm from './edit_gallery_form';

const mSTP = (state, ownProps) => {
  let gallery = state.entities ? state.entities.galleries[ownProps.match.params.id] : {};

  return {
    gallery: gallery,
    session: state.session.id,
    formType: 'Edit Gallery'
  };
};

const mDTP = dispatch => {
  return {
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
    deleteGallery: galleryId => dispatch(deleteGallery(galleryId)),
    action: gallery => dispatch(updateGallery(gallery)),
  };
};

export default connect(mSTP, mDTP)(EditGalleryForm);