import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import gallery from './gallery_errors_reducer';
import picture from './picture_errors_reducer';

const ErrorsReducer = combineReducers({
  session,
  gallery,
  picture,
});

export default ErrorsReducer;