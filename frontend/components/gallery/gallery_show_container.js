import { connect } from 'react-redux';
import { fetchGallery, deleteGallery, fetchGalleries } from '../../actions/gallery_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchPictures } from '../../actions/picture_actions';
import GalleryShow from './gallery_show';

const mSTP = ( state, ownProps ) => {
  return {
    gallery: state.entities.galleries[ownProps.match.params.id],
    galleries: Object.values(state.entities.galleries),
    pictures: Object.values(state.entities.pictures),
    users: state.entities.users,
    session: state.session.id,
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