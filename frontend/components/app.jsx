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
import HomeFeed from './home_feed';
import Splash from './splash';
import HeaderContainer from './header/header_container';
import Navbar from './navbar/navbar';
import UploadForm from './pictures/upload_form';
import FourOhFour from './four_oh_four';
import PictureIndexContainer from './pictures/picture_index_container';
import PictureShowContainer from './pictures/picture_show_container';

const App = () => {
  return (
    <div>
      <header className="inner_header">
        <li><Navbar/></li>
        <li><HeaderContainer/></li>
      </header>
      <Modal/>
      <Switch>
        <ProtectedRoute path='/home' component={HomeFeed}/>
        <ProtectedRoute path='/upload' component={UploadForm} />
        <ProtectedRoute path='/pictures' component={PictureIndexContainer}/>
        <Route exact path='/pictures/:pictureId' component={PictureShowContainer} />

        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>

        <Route path='/404' component={FourOhFour}/>
        <Redirect to='/404'/>
      </Switch>
    </div>
  );
};

export default App;