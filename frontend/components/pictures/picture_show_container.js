import { connect } from 'react-redux';
import { fetchPicture, deletePicture } from '../../actions/picture_actions';
import { fetchAllUsers, fetchUser } from '../../actions/profile_actions';
import { createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';
import PictureShow from './picture_show';

const mSTP = ( state, ownProps ) => {
  return {
    picture: state.entities.pictures[ownProps.match.params.id],
    follows: state.entities.follows,
    users: state.entities.users,
    session: state.session.id,
  };
};

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchPicture: () => dispatch(fetchPicture(parseInt(ownProps.match.params.id))),
    deletePicture: () => dispatch(deletePicture(parseInt(ownProps.match.params.id))),
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: id => dispatch(deleteFollow(id)),
  };
};

export default connect(mSTP, mDTP)(PictureShow);