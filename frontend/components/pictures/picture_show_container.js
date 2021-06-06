import React from 'react';
import { connect } from 'react-redux';
import { fetchPicture, deletePicture, fetchPictures } from '../../actions/picture_actions';
import { fetchGalleries } from '../../actions/gallery_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import PictureShow from './picture_show';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ( state, ownProps ) => {
  let session = state.session.id ? state.session.id : '';
  let picture = state.entities.pictures ? state.entities.pictures[ownProps.match.params.id] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let creator = picture ? picture.uploader_id : '';
  let currentUser = state.entities.user ? state.entities.user[creator] : {};
  let users = state.entities.user ? Object.values(state.entities.user) : {};
  let picUploader = state.entities.users ? state.entities.users[creator] : {};
  return {
    picture: picture,
    pictures: pictures,
    picUploader: picUploader,
    galleries: galleries,
    creator: creator,
    currentUser: currentUser,
    users: users,
    session: session,
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchPicture: () => dispatch(fetchPicture(parseInt(ownProps.match.params.id))),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchGalleries: () => dispatch(fetchGalleries()),
    deletePicture: () => dispatch(deletePicture(parseInt(ownProps.match.params.id))),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    openModal: () => dispatch(openModal('creator')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(PictureShow);