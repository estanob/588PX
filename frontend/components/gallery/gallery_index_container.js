import { connect } from "react-redux";
import GalleryIndex from './gallery_index';
import { fetchGalleries } from "../../actions/gallery_actions";
import { fetchUser } from "../../actions/profile_actions";
import { fetchPictures } from "../../actions/picture_actions";
import { fetchPicturesToGalleries } from "../../actions/pictures_to_gallery_actions";

const mSTP = state => {
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  let picturesToGalleries = state.entities.picturesToGalleries ? Object.values(state.entities.picturesToGalleries) : [];
  let session = state.session.id ? state.session.id : '';
  let userPics = pictures ? pictures.filter(picture => picture.uploader_id === session) : [];
  return {
    galleries: galleries,
    pictures: pictures,
    picturesToGalleries: picturesToGalleries,
    session: session,
    userPics: userPics,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPicturesToGalleries: () => dispatch(fetchPicturesToGalleries()),
  };
};

export default connect(mSTP, mDTP)(GalleryIndex);