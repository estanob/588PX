import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import pictures from './picture_errors_reducer';

const ErrorsReducer = combineReducers({
  session,
  pictures,
});

export default ErrorsReducer;