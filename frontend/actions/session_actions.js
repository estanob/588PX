import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const demoUser = {
  username: "demo123", 
  password: "123456"
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
};

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user)) //calling login will stay here
      dispatch(clearErrors())
    }) 
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
  };
  
  export const demoLogin = () => dispatch => {
    return APIUtil.login(demoUser)
    .then(user => {
      dispatch(receiveCurrentUser(user))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(user => {dispatch(logoutCurrentUser(null))})
};