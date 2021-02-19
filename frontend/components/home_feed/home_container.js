import { connect } from "react-redux";
import HomeIndex from "./home_index";
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


export default connect(mSTP, mDTP)(HomeIndex);