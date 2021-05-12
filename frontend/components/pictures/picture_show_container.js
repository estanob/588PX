import { connect } from 'react-redux';
import { fetchPicture, deletePicture } from '../../actions/picture_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import PictureShow from './picture_show';

const mSTP = ( state, ownProps ) => {
  let picture = state.entities.pictures ? state.entities.pictures[ownProps.match.params.id] : {};
  let users = state.entities.users ? state.entities.users : {};
  let session = state.session.id ? state.session.id : '';
  return {
    picture: picture,
    users: users,
    session: session,
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchPicture: () => dispatch(fetchPicture(parseInt(ownProps.match.params.id))),
    deletePicture: () => dispatch(deletePicture(parseInt(ownProps.match.params.id))),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
  };
};

export default connect(mSTP, mDTP)(PictureShow);