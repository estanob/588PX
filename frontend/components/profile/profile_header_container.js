import { connect } from 'react-redux'
import ProfileHeader from './profile_header'
import { fetchUser } from '../../actions/profile_actions'
import { fetchPicturess } from '../../actions/picture_actions'
import { fetchLikes, createLike, deleteLike } from '../../actions/like_actions'

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    like: Object.values(state.entities.like),
    pictures: Object.values(state.entities.pictures),
    session: state.session.id
  }
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPictures: () => dispatch(fetchPictures()),
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: (userId, pictureId) => dispatch(createLike(userId, pictureId)),
  deleteLike: likeId => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(ProfileHeader)