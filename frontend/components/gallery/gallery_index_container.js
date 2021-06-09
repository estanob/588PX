import { connect } from "react-redux";
import GalleryIndex from './gallery_index';
import { fetchGalleries, fetchGallery } from "../../actions/gallery_actions";
import { fetchUser } from "../../actions/profile_actions";
import { fetchPictures } from "../../actions/picture_actions";
import { fetchPicturesToGalleries } from "../../actions/pictures_to_gallery_actions";

const mSTP = state => {
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let session = state.session.id ? state.session.id : '';
  let currentUser = state.entities.user ? state.entities.user : {};
  return {
    galleries: galleries,
    pictures: Object.values(state.entities.pictures),
    picturesToGalleries: Object.values(state.entities.picturesToGalleries),
    session: session,
    currentUser: currentUser,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchGallery: galleryId => dispatch(fetchGallery(galleryId)),
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
  };
};

export default connect(mSTP, mDTP)(GalleryIndex);