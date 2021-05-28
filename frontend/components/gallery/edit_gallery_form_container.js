import { connect } from 'react-redux';
import React from 'react';
import { deleteGallery, fetchGallery, updateGallery } from '../../actions/gallery_actions';
import EditGalleryForm from './edit_gallery_form';
import { fetchPictures } from '../../actions/picture_actions';
import { createPicturesToGallery, deletePicturesToGallery, fetchPicturesToGalleries } from '../../actions/pictures_to_gallery_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  debugger
  let gallery = state.entities ? state.entities.galleries[ownProps.match.params.id] : {};
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities.users ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : {};
  let picsToGals = state.entities.picsToGals ? Object.values(state.entities.picsToGals) : [];
  debugger
  return {
    session: session,
    gallery: gallery,
    thisUser: thisUser,
    userPicIds: thisUser.pictures,
    galleries: galleries,
    pictures: pictures,
    picsToGals: picsToGals,
    formType: 'Edit Gallery',
  };
};

const mDTP = dispatch => {
  return {
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
    deleteGallery: galleryId => dispatch(deleteGallery(galleryId)),
    fetchPictures: () => dispatch(fetchPictures()),
    action: gallery => dispatch(updateGallery(gallery)),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
    createPicturesToGallery: picsToGal => dispatch(createPicturesToGallery(picsToGal)),
    deletePicturesToGallery: picsToGal => dispatch(deletePicturesToGallery(picsToGal)),
    openModal: () => dispatch(openModal()),
    galleryImageModal: (
      <button
        className="gallery-image-button"
        onClick={() => dispatch(openModal('gallery'))}>
        Select Display Image
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(EditGalleryForm);