import {
  RECEIVE_ALL_GALLERIES,
  RECEIVE_GALLERY,
  REMOVE_GALLERY
} from '../actions/gallery_actions';

const GalleriesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_GALLERIES:
      return action.galleries
    case RECEIVE_GALLERY:
      nextState[action.gallery.id] = action.gallery
      return nextState
    case REMOVE_GALLERY:
      delete nextState[action.galleryId]
      return nextState
    default:
      return state;
  }
}

export default GalleriesReducer