import { connect } from "react-redux";
import HomeIndex from "./home";
import { fetchPictures } from "../../actions/picture_actions";
import { fetchLikes, createLike, deleteLike } from '../../actions/like_actions';

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts),
    like: Object.values(state.entities.like),
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (userId, pictureId) => dispatch(createLike(userId, pictureId)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}


export default connect(mSTP, mDTP)(HomeIndex)