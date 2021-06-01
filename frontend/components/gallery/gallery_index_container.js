import { connect } from "react-redux";
import GalleryIndex from './gallery_index';
import { fetchGalleries, fetchGallery } from "../../actions/gallery_actions";
import { fetchUser } from "../../actions/profile_actions";
import { fetchPictures } from "../../actions/picture_actions";

const mSTP = state => {
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  return {
    galleries: galleries,
    pictures: Object.values(state.entities.pictures),
    session: state.session.id,
  };
};

const mDTP = dispatch => {
  return {
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(GalleryIndex);