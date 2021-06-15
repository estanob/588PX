import React from 'react';
import { connect } from 'react-redux';
import { fetchPicture, deletePicture, fetchPictures } from '../../actions/picture_actions';
import { fetchGalleries } from '../../actions/gallery_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';
import PictureShow from './picture_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPictureLikes } from '../../actions/picture_like_actions';

const mSTP = ( state, ownProps ) => {
  debugger
  let session = state.session.id ? state.session.id : '';
  let picture = state.entities.pictures ? state.entities.pictures[ownProps.match.params.id] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  let pictureLikes = state.entities.pictureLikes ? Object.values(state.entities.pictureLikes) : [];
  let likedByUser = (pictureLikes && picture && session) ? pictureLikes.find(like => {
    if (like.liker_id === session && like.picture_id === picture.id) return like
  }) : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let follows = state.entities.follows ? Object.values(state.entities.follows) : [];
  let creator = picture ? picture.uploader_id : '';
  let owner = (state.entities.user && creator) ? state.entities.user[creator] : {}
  let currentUser = (state.entities.user && session) ? state.entities.user[session] : {};
  let followingIds = currentUser ? currentUser.followees : [];
  let users = state.entities.user ? Object.values(state.entities.user) : [];
  let picUploader = state.entities.users ? state.entities.users[creator] : {};
  let followRelation = follows ? follows.find(follow => {
    if (follow.user_id === session && follow.followee_id === creator) return follow
  }) : {};
  debugger
  return {
    picture: picture,
    pictures: pictures,
    picUploader: picUploader,
    pictureLikes: pictureLikes,
    likedByUser: likedByUser,
    galleries: galleries,
    follows: follows,
    followRelation: followRelation,
    followingIds: followingIds,
    creator: creator,
    owner: owner,
    currentUser: currentUser,
    users: users,
    session: session,
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchPicture: () => dispatch(fetchPicture(parseInt(ownProps.match.params.id))),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPictureLikes: () => dispatch(fetchPictureLikes()),
    fetchGalleries: () => dispatch(fetchGalleries()),
    deletePicture: () => dispatch(deletePicture(parseInt(ownProps.match.params.id))),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    openModal: () => dispatch(openModal('creator')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(PictureShow);