import {
  RECEIVE_ALL_PICTURES_TO_GALLERIES,
  RECEIVE_PICTURES_TO_GALLERY,
  REMOVE_PICTURES_TO_GALLERY,
} from '../actions/pictures_to_gallery_actions';

const PicturesToGalleriesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_PICTURES_TO_GALLERIES:
      nextState = Object.assign({}, action.pictures_to_galleries)
      return action.pictures_to_galleries;
    case RECEIVE_PICTURES_TO_GALLERY:
      nextState[action.pictures_to_gallery.id] = action.pictures_to_gallery
      return nextState;
    case REMOVE_PICTURES_TO_GALLERY:
      delete nextState[action.pictures_to_galleryId]
      return nextState;
    default:
      return state;
  };
};

export default PicturesToGalleriesReducer;