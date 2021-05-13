import { connect } from "react-redux"
import PictureIndex from "./picture_index"
import { fetchPicture, fetchPictures } from "../../actions/picture_actions"
import { fetchUser } from "../../actions/profile_actions";

const mSTP = (state, ownProps) => {
  debugger
  let picIds = ownProps.picIds ? ownProps.picIds : null;
  let allPics = Object.values(state.entities.pictures);
  let pictures = [];
  if (picIds) {
    picIds.forEach(id => {
      pictures.push(allPics[id])
    })
  } else {
    pictures = allPics;
  }
  return {
    pictures: pictures,
    session: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchUser: id => dispatch(fetchUser(id)),
  };
};

export default connect(mSTP, mDTP)(PictureIndex);