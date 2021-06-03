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
      debugger
      nextState = Object.assign({}, action.picturesToGalleries)
      return action.picturesToGalleries;
    case RECEIVE_PICTURES_TO_GALLERY:
      debugger
      nextState[action.picturesToGallery.id] = action.picturesToGallery
      return nextState;
    case REMOVE_PICTURES_TO_GALLERY:
      delete nextState[action.picturesToGalleryId]
      return nextState;
    default:
      return state;
  };
};

export default PicturesToGalleriesReducer;