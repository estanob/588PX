import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      nextState = Object.assign({}, action.follows)
      return action.follows
    case RECEIVE_FOLLOW:
      nextState[action.follow.id] = action.follow
      return nextState
    case REMOVE_FOLLOW:
      delete nextState[action.followId]
      return nextState
    default:
      return state;
  }
}

export default FollowsReducer;