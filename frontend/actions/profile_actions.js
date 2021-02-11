import * as ProfileAPIUtil from '../util/profile_api_util';
export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = userId => dispatch => {
  return ProfileAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};