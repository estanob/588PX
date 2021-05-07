import { connect } from 'react-redux'
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions'
import { fetchPictures } from '../../actions/picture_actions'
import ProfileHeader from './profile_header'

const mSTP = (state, ownProps) => {
  return {
    users: state.entities.users,
    pictures: Object.values(state.entities.pictures),
    session: state.session.id
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
  }
}

export default connect(mSTP, mDTP)(ProfileHeader);