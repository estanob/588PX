import {
  RECEIVE_ALL_PICTURES, 
  RECEIVE_PICTURE, 
  REMOVE_PICTURE
} from '../actions/picture_actions';

const PicturesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_PICTURES:
      return action.pictures
    case RECEIVE_PICTURE:
      nextState[action.picture.id] = action.picture
      return nextState
    case REMOVE_PICTURE:
      delete nextState[action.pictureId]
      return nextState
    default:
      return state;
  }
}

export default PicturesReducer;