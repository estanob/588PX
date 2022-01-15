import React from 'react';
import { connect } from 'react-redux';
import { fetchGallery, deleteGallery, fetchGalleries } from '../../actions/gallery_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryShow from './gallery_show';
import { deletePicturesToGallery, fetchPicturesToGalleries } from '../../actions/pictures_to_gallery_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';

const mSTP = ( state, ownProps ) => {
  let session = state.session.id ? state.session.id : '';
  let gallery = state.entities.galleries ? state.entities.galleries[ownProps.match.params.id] : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let creator = gallery ? gallery.creator_id : '';
  let follows = state.entities.follows ? Object.values(state.entities.follows) : [];
  let users = state.entities.user ? Object.values(state.entities.user) : [];
  let followRelation = follows ? follows.find(follow => {
    if (follow.user_id === session && follow.followee_id === creator) return follow
  }) : {};
  let galCreator = state.entities.user ? state.entities.user[creator] : [];
  let thisUser = (state.entities.user && session) ? state.entities.user[session] : {};
  let followingIds = thisUser ? thisUser.followees : [];
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  return {
    gallery: gallery,
    galleries: galleries,
    creator: creator,
    galCreator: galCreator,
    followRelation: followRelation,
    follows: follows,
    followingIds: followingIds,
    pictures: pictures,
    users: users,
    session: session,
    thisUser: thisUser,
    picturesToGalleries: Object.values(state.entities.picturesToGalleries),
  };
};

const mDTP = (dispatch, ownProps)=> {
  debugger
  return {
    fetchGallery: () => dispatch(fetchGallery(parseInt(ownProps.match.params.id))),
    deleteGallery: () => dispatch(deleteGallery(parseInt(ownProps.match.params.id))),
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
    deletePicturesToGallery: picturesToGallery => dispatch(deletePicturesToGallery(picturesToGallery)),
    openModal: () => dispatch(openModal('creator')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(GalleryShow);