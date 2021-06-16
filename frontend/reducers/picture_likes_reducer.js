import {
  RECEIVE_ALL_PICTURE_LIKES,
  RECEIVE_PICTURE_LIKE,
  REMOVE_PICTURE_LIKE
} from '../actions/picture_like_actions';

const PictureLikesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_PICTURE_LIKES:
      nextState = Object.assign({}, action.pictureLikes)
      return action.pictureLikes;
    case RECEIVE_PICTURE_LIKE:
      nextState[action.pictureLike.id] = action.pictureLike
      return nextState;
    case REMOVE_PICTURE_LIKE:
      delete nextState[action.pictureLikeId]
      return nextState;
    default:
      return state;
  };
};

export default PictureLikesReducer;