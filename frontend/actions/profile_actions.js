import * as ProfileAPIUtil from '../util/profile_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';


export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const fetchUser = userId => dispatch => {
  return ProfileAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

export const fetchAllUsers = () => dispatch => {
  return ProfileAPIUtil.fetchAllUsers()
    .then((users) => {
      dispatch(receiveAllUsers(users))
    });
};