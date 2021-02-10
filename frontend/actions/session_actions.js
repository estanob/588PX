import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// thunk action creators:

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
      dispatch(clearErrors())
    })
    .fail(error => dispatch(receiveErrors()))
}

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
}

export const register = user => dispatch => {
  return SessionAPIUtil.register(user)
    .then(newUser => {
      dispatch(receiveCurrentUser(newUser))
      dispatch(clearErrors())})
    .fail(error => dispatch(receiveErrors(error)))
}