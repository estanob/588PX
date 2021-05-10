import React from 'react';
import { connect } from 'react-redux'
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions'
import { fetchPictures } from '../../actions/picture_actions'
import { fetchGalleries } from '../../actions/gallery_actions'
import Profile from './profile'
import { closeModal, openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  return {
    users: state.entities.users,
    pictures: Object.values(state.entities.pictures),
    galleries: Object.values(state.entities.galleries),
    session: state.session.id,
    allUsers: state.entities.user,
    profileContent: 'Pictures',
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
      <input 
        type="button" 
        className="cancel-button" 
        value="Cancel" 
        onClick={() => dispatch(openModal('followers'))} />
    ),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mSTP, mDTP)(Profile);