import { connect } from 'react-redux';
import { fetchPicture, deletePicture } from '../../actions/picture_actions';
import { fetchUser } from '../../actions/profile_actions';
import PictureShow from './picture_show';

const mSTP = ( state, ownProps ) => {
  return {
    picture: state.entities.pictures[ownProps.match.params.id],
    users: state.entities.users,
    session: state.session.id
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchPicture: () => dispatch(fetchPicture(parseInt(ownProps.match.params.id))),
    deletePicture: () => dispatch(deletePicture(parseInt(ownProps.match.params.id))),
  };
};

export default connect(mSTP, mDTP)(PictureShow);