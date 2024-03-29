import {
  RECEIVE_PICTURE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from '../actions/picture_actions';

import { CLOSE_MODAL } from '../actions/modal_actions';

export default (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PICTURE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return {};
    case CLEAR_ERRORS:
      return [];
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};