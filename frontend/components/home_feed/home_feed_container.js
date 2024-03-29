import { connect } from "react-redux";
import HomeFeed from "./home_feed.jsx";
import { fetchPictures } from "../../actions/picture_actions";

const mSTP = state => {
  return {
    pictures: Object.values(state.entities.pictures),
    session: state.session.id,
  }
}

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
  }
}


export default connect(mSTP, mDTP)(HomeFeed);