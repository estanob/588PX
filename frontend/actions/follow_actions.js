import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow,
  };
};

const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    follow,
  };
};

export const createFollow = follow => dispatch => {
  return FollowAPIUtil.createFollow(follow)
    .then(newFollow => {
      dispatch(receiveFollow(newFollow))
    });
};

export const deleteFollow = id => dispatch => {
  return FollowAPIUtil.deleteFollow(id)
    .then(res => dispatch(removeFollow(res)))
};