import { connect } from "react-redux"
import PictureIndex from "./picture_index"
import { fetchPicture, fetchPictures } from "../../actions/picture_actions"

const mSTP = state => {
  return {
    pictures: Object.values(state.entities.pictures),
    session: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(PictureIndex);