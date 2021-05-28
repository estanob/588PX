import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PicturesReducer from './pictures_reducer';
import ProfileReducer from './profile_reducer';
import GalleriesReducer from './galleries_reducer';
import FollowsReducer from './follows_reducer';
import PicturesToGalleriesReducer from './pictures_to_galleries_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  pictures: PicturesReducer,
  galleries: GalleriesReducer,
  picsToGals: PicturesToGalleriesReducer,
  follows: FollowsReducer,
  user: ProfileReducer,
})

export default entitiesReducer;