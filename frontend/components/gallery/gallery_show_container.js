import { connect } from 'react-redux';
import { fetchGallery, deleteGallery } from '../../actions/gallery_actions';
import { fetchUser } from '../../actions/profile_actions';
import GalleryShow from './gallery_show';

const mSTP = ( state, ownProps ) => {
  debugger
  return {
    gallery: state.entities.galleries[ownProps.match.params.id],
    users: state.entities.users,
    session: state.session.id,
  };
};

const mDTP = (dispatch, ownProps)=> {
  debugger
  return {
    fetchGallery: () => dispatch(fetchGallery(parseInt(ownProps.match.params.id))),
    deleteGallery: () => dispatch(deleteGallery(parseInt(ownProps.match.params.id))),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
  };
};

export default connect(mSTP, mDTP)(GalleryShow);