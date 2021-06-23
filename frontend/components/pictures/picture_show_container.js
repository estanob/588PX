import React from 'react';
import { connect } from 'react-redux';
import { fetchPicture, deletePicture, fetchPictures } from '../../actions/picture_actions';
import { fetchGalleries } from '../../actions/gallery_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';
import PictureShow from './picture_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createPictureLike, deletePictureLike, fetchPictureLikes } from '../../actions/picture_like_actions';

const mSTP = ( state, ownProps ) => {
  
  let session = state.session.id ? state.session.id : '';
  let picture = state.entities.pictures ? state.entities.pictures[ownProps.match.params.id] : {};
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  let pictureLikes = state.entities.pictureLikes ? Object.values(state.entities.pictureLikes) : [];
  let likedByUser = (pictureLikes && picture && session) ? pictureLikes.find(like => {
    if (like.liker_id === session && like.picture_id === picture.id) return like
  }) : null;
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
  const newGalleryButton = <svg 
                              width="36" 
                              height="36" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg">
                              <path 
                                fillRule="evenodd" 
                                clipRule="evenodd" 
                                d=
                                  "M16.47 7.53H23.2935C23.4807 7.5296 23.6604 
                                  7.6037 23.793 7.73596C23.9255 7.86822 24 
                                  8.04776 24 8.235V23.2935C24.0004 23.481 
                                  23.9261 23.6609 23.7935 23.7935C23.6609 
                                  23.9261 23.481 24.0004 23.2935 
                                  24H8.235C8.04776 24 7.86822 23.9255 7.73596 
                                  23.793C7.6037 23.6604 7.5296 23.4807 7.53 
                                  23.2935V16.47H0.706503C0.519266 16.4704 
                                  0.339561 16.3963 0.207023 16.264C0.0744852 
                                  16.1318 1.58867e-06 15.9522 1.58867e-06 
                                  15.765V0.706503C-0.000396167 0.519006 
                                  0.0739102 0.339072 0.206491 0.206491C0.339072 
                                  0.0739102 0.519006 -0.000396167 0.706503 
                                  1.58867e-06H15.765C15.9522 1.58867e-06 16.1318 
                                  0.0744852 16.264 0.207023C16.3963 0.339561 
                                  16.4704 0.519266 16.47 0.706503V7.53ZM1.4115 
                                  1.4085V15.0585H15.0615V1.4085H1.4115ZM8.9385 
                                  22.5885H22.5885V8.9415H16.47V15.765C16.4704 
                                  15.9521 16.3963 16.1317 16.264 16.264C16.1317 
                                  16.3963 15.9521 16.4704 15.765 
                                  16.47H8.9385V22.5885ZM8.9415 7.53H12C12.2599 
                                  7.51802 12.5054 7.64985 12.6389 
                                  7.87315C12.7724 8.09644 12.7724 8.37506 
                                  12.6389 8.59836C12.5054 8.82166 12.2599 
                                  8.95349 12 8.9415H8.9415V12C8.95349 12.2599 
                                  8.82166 12.5054 8.59836 12.6389C8.37506 
                                  12.7724 8.09644 12.7724 7.87315 
                                  12.6389C7.64985 12.5054 7.51802 12.2599 7.53 
                                  12V8.9415H4.47C4.09287 8.92411 3.79605 8.61329 
                                  3.79605 8.23575C3.79605 7.85822 4.09287 
                                  7.54739 4.47 7.53H7.53V4.47C7.54739 4.09287 
                                  7.85822 3.79605 8.23575 3.79605C8.61329 
                                  3.79605 8.92411 4.09287 8.9415 4.47V7.53Z" 
                                fill="#222222">
                              </path>
                           </svg>;
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
    newGalleryButton: newGalleryButton,
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
    createLike: picLike => dispatch(createPictureLike(picLike)),
    deleteLike: picLike => dispatch(deletePictureLike(picLike)),
    openModal: () => dispatch(openModal('creator')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(PictureShow);