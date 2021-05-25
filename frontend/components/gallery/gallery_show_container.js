import { connect } from 'react-redux';
import { fetchGallery, deleteGallery, fetchGalleries } from '../../actions/gallery_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryShow from './gallery_show';

const mSTP = ( state, ownProps ) => {
  let gallery = state.entities.galleries ? state.entities.galleries[ownProps.match.params.id] : {};
  let galleries = state.entities.galleries ? Object.values(state.entities.galleries) : [];
  let users = state.entities.users ? state.entities.users : [];
  let session = state.session.id ? state.session.id : '';
  let pictures = state.entities.pictures ? Object.values(state.entities.pictures) : [];
  return {
    gallery: gallery,
    galleries: galleries,
    pictures: pictures,
    users: users,
    session: session,
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchGallery: () => dispatch(fetchGallery(parseInt(ownProps.match.params.id))),
    deleteGallery: () => dispatch(deleteGallery(parseInt(ownProps.match.params.id))),
    fetchGalleries: () => dispatch(fetchGalleries()),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(GalleryShow);