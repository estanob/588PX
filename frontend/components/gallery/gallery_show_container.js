import { connect } from 'react-redux';
import { fetchGallery, deleteGallery } from '../../actions/gallery_actions';
import { fetchUser } from '../../actions/profile_actions';
import GalleryShow from './gallery_show';

const mSTP = ( state, ownProps ) => {
  return {
    gallery: state.entities.galleries[ownProps.match.params.id],
    galleries: Object.values(state.entities.galleries),
    users: state.entities.users,
    session: state.session.id,
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchGallery: () => dispatch(fetchGallery(parseInt(ownProps.match.params.id))),
    deleteGallery: () => dispatch(deleteGallery(parseInt(ownProps.match.params.id))),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
  };
};

export default connect(mSTP, mDTP)(GalleryShow);