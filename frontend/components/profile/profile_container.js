import React from 'react';
import { connect } from 'react-redux'
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions'
import { fetchPictures } from '../../actions/picture_actions'
import { fetchGalleries } from '../../actions/gallery_actions'
import Profile from './profile'
import { closeModal, openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  const thisUser = state.entities.users ? state.entities.users : {};
  const allUsers = state.entities.user ? Object.values(state.entities.user) : {};
  const session = state.session.id ? state.session.id : '';
  const pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  return {
    users: thisUser,
    session: session,
    allUsers: allUsers,
    pictures: pictures,
    galleries: Object.values(state.entities.galleries),
    profileContent: 'Pictures',
    numFollowers: thisUser[session].followers.length,      
    numFollowees: thisUser[session].followees.length,    
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchGalleries: () => dispatch(fetchGalleries()),
    openModal: () => dispatch(openModal()),
    followersModal: (
      <button 
        className="modal-button" 
        onClick={() => dispatch(openModal('followers'))}>
          Followers
        </button>
    ),
    followingModal: (
      <button 
        className="modal-button" 
        onClick={() => dispatch(openModal('following'))}>
          Following
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mSTP, mDTP)(Profile);