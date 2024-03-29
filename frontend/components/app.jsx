import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import Splash from './splash';
import HeaderContainer from './header/header_container';
import Navbar from './navbar/navbar';
import UploadForm from './pictures/upload_form';
import FourOhFour from './four_oh_four';
import NewGallery from './gallery/new_gallery';
import OwnGallery from './gallery/own_gallery';
import GalleryShowContainer from './gallery/gallery_show_container';
import GalleryIndexContainer from './gallery/gallery_index_container';
import PictureIndexContainer from './pictures/picture_index_container';
import PictureShowContainer from './pictures/picture_show_container';
import EditPictureFormContainer from './pictures/edit_picture_form_container';
import ProfileContainer from './profile/profile_container';

const App = () => {
  return (
    <div>
      <header className="inner_header">
        <li><Navbar/></li>
        <li><HeaderContainer/></li>
      </header>
      <Modal/>
      <Switch>
        <ProtectedRoute path='/home' component={HomeFeedContainer} />
        <ProtectedRoute path='/upload' component={UploadForm} />
        <ProtectedRoute path='/galleries/new' component={NewGallery} />
        <ProtectedRoute exact path='/pictures/:id/edit' component={EditPictureFormContainer} />
        <ProtectedRoute exact path='/pictures/:id' component={PictureShowContainer} />
        <ProtectedRoute path='/pictures' component={PictureIndexContainer} />
        <ProtectedRoute exact path='/galleries/own' component={OwnGallery} />
        <ProtectedRoute exact path='/galleries/:id' component={GalleryShowContainer} />
        <ProtectedRoute path='/galleries' component={GalleryIndexContainer} />
        <ProtectedRoute path='/p/:username' component={ProfileContainer} />

        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        <Route path='/404' component={FourOhFour} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
};

export default App;