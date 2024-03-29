import {
  RECEIVE_GALLERY_ERRORS,
  CLEAR_ERRORS,
} from "../actions/gallery_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GALLERY_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}