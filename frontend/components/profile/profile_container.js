import { connect } from 'react-redux'
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions'
import { fetchPictures } from '../../actions/picture_actions'
import { fetchGalleries } from '../../actions/gallery_actions'
import Profile from './profile'

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
  }
}

export default connect(mSTP, mDTP)(Profile);