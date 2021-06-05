import React from 'react';
import { connect } from 'react-redux';
import { fetchGallery, deleteGallery, fetchGalleries } from '../../actions/gallery_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryShow from './gallery_show';
import { deletePicturesToGallery, fetchPicturesToGalleries } from '../../actions/pictures_to_gallery_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ( state, ownProps ) => {
  let gallery = state.entities.galleries ? state.entities.galleries[ownProps.match.params.id] : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let creator = gallery ? gallery.creator_id : '';
  let users = state.entities.users ? state.entities.users : [];
  let session = state.session.id ? state.session.id : '';
  let thisUser = state.entities.users ? state.entities.users[session] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  debugger
  return {
    gallery: gallery,
    galleries: galleries,
    creator: creator,
    pictures: pictures,
    users: users,
    session: session,
    thisUser: thisUser,
    picturesToGalleries: Object.values(state.entities.picturesToGalleries),
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchGallery: () => dispatch(fetchGallery(parseInt(ownProps.match.params.id))),
    deleteGallery: () => dispatch(deleteGallery(parseInt(ownProps.match.params.id))),
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
    deletePicturesToGallery: picturesToGallery => dispatch(deletePicturesToGallery(picturesToGallery)),
    openModal: () => dispatch(openModal('creator')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(GalleryShow);