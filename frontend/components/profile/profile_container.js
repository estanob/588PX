import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';
import { fetchPictures } from '../../actions/picture_actions';
import Profile from './profile';

const mSTP = ( state, ownProps ) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    pictures: Object.values(state.entities.pictures),
    session: state.session.userId
  };
};

const mDTP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default connect(mSTP, mDTP)(Profile);