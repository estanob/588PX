import { connect } from 'react-redux'
import ProfileHeader from './profile_header'
import { fetchUser } from '../../actions/profile_actions'
import { fetchPictures } from '../../actions/picture_actions'

const mSTP = (state, ownProps) => {
  debugger
  let user = state.entities.users[ownProps.match.params.userId];
  return {
    user: user,
    pictures: Object.values(state.entities.pictures),
    session: state.session.id
  }
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPictures: () => dispatch(fetchPictures()),
})

export default connect(mSTP, mDTP)(ProfileHeader);