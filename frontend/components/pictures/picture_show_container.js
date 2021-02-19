import { connect } from 'react-redux';
import { fetchPicture } from '../../actions/picture_actions';
import PictureShow from './picture_show';

const mSTP = (state, ownProps) => {
  return {
    picture: state.entities.pictures[ownProps.match.params.pictureId],
    session: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId))
  };
};

export default connect(mSTP, mDTP)(PictureShow);