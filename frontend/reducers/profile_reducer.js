const { RECEIVE_ALL_USERS, RECEIVE_USER } = require("../actions/profile_actions");


const ProfileReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_ALL_USERS:
      newState = Object.assign({}, action.users);
      return newState;
    default:
      return state;
  };
};

export default ProfileReducer;