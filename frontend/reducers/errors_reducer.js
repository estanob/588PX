import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import picture from './picture_errors_reducer';

const ErrorsReducer = combineReducers({
  session,
  picture,
});

export default ErrorsReducer;