import { connect } from 'react-redux';
import { fetchPicture, deletePicture } from '../../actions/picture_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';
import PictureShow from './picture_show';

const mSTP = ( state, ownProps ) => {
  let picture = state.entities.pictures ? state.entities.pictures[ownProps.match.params.id] : {};
  let users = state.entities.users ? state.entities.users : {};
  let session = state.session.id ? state.session.id : '';
  let follows = state.entities.follows ?  state.entities.follows : {};
  debugger
  return {
    picture: picture,
    users: users,
    session: session,
    follows: follows
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchPicture: () => dispatch(fetchPicture(parseInt(ownProps.match.params.id))),
    deletePicture: () => dispatch(deletePicture(parseInt(ownProps.match.params.id))),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFollows: () => dispatch(fetchFollows),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
  };
};

export default connect(mSTP, mDTP)(PictureShow);