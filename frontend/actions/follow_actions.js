import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = follows => {
  return {
    type: RECEIVE_ALL_FOLLOWS,
    follows
  }
}

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

export const fetchFollows = () => dispatch => {
  return FollowAPIUtil.fetchFollows()
    .then(follows => {
      dispatch(receiveFollows(follows))
    });
};

export const createFollow = follow => dispatch => {
  return FollowAPIUtil.createFollow(follow)
    .then(newFollow => {
      dispatch(receiveFollow(newFollow))
    });
};

export const deleteFollow = follow => dispatch => {
  return FollowAPIUtil.deleteFollow(follow)
    .then(() => dispatch(removeFollow(follow)))
};