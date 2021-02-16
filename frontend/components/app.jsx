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
// import HomeFeed from './home_feed';
import Splash from './splash';
import HeaderContainer from './header/header_container';
import Navbar from './navbar/navbar';
import FourOhFour from './four_oh_four';

const App = () => {
  return (
    <div>
      <header className="inner_header">
        <li><Navbar/></li>
        <li><HeaderContainer /></li>
      </header>
      <Modal/>
      <Switch>
        {/* <ProtectedRoute exact path='/home_feed' component={HomeFeed}/> */}
        
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>

        {/* <Redirect to='/'/> */}
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  );
};

export default App;