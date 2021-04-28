import { connect } from 'react-redux'
import ProfileHeader from './profile_header'
import { fetchUser } from '../../actions/profile_actions'
import { fetchPictures } from '../../actions/picture_actions'

const mSTP = (state, ownProps ) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    pictures: Object.values(state.entities.pictures),
    session: state.session.id
  }
}

const mDTP = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
  fetchPictures: () => dispatch(fetchPictures()),
})

export default connect(mSTP, mDTP)(ProfileHeader);