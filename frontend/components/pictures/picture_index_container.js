import { connect } from "react-redux"
import PictureIndex from "./picture_index"
import { fetchPictures } from "../../actions/picture_actions"

const mSTP = state => {
  console.log('hello');
  console.log(state);
  return {
    pictures: Object.values(state.entities.pictures),
    session: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(PictureIndex);