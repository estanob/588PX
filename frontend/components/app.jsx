import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import LoginFormContainer from '../components/session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';
// import HomeFeed from './home_feed';
import HomePage from './home_page';
import HeaderContainer from './header/header_container';
import Navbar from './navbar/navbar';

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
        
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/register" component={RegisterFormContainer}/>
        <AuthRoute path="/" component={HomePage} />

        {/* <Redirect to='/'/> */}
        <Route path='*' component={HomePage}/>
      </Switch>
    </div>
  )
}

export default App;