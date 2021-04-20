const { RECEIVE_PICTURE_ERRORS, CLEAR_ERRORS } = require("../actions/picture_actions");

const PictureErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PICTURE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return {};
    default:
      return oldState;
  }
};

export default PictureErrorsReducer;