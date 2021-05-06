import { connect } from "react-redux";
import GalleryIndex from './gallery_index';
import { fetchGalleries, fetchGallery } from "../../actions/gallery_actions";
import { fetchUser } from "../../actions/profile_actions";

const mSTP = state => {
  return {
    galleries: Object.values(state.entities.galleries),
    session: state.session.id,
  };
};

const mDTP = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
  };
};

export default connect(mSTP, mDTP)(GalleryIndex);