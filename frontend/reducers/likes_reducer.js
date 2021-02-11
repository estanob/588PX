import { REMOVE_LIKE, RECEIVE_LIKE, RECEIVE_ALL_LIKES } from "../actions/like_actions";

const LikeReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes
    case RECEIVE_LIKE:
      return { ...state, [action.id]: { id: action.id, user: action.user, picture_id: action.picture } }
    case REMOVE_LIKE:
      delete nextState[action.likeId]
      return nextState
    default:
      return state;
  }
}

export default LikeReducer