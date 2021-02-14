import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';
import HomeFeed from './home_feed';
import HomePage from './home_page';

const App = () => {
  return (
    <div className="app">
      <header>
        <nav>
          <GreetingContainer />
        </nav>
      </header>
      <Modal />
      <Switch>
        <ProtectedRoute exact path='/home' component={HomeFeed}/>
        
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/register" component={RegisterFormContainer}/>
        <AuthRoute exact path="/" component={HomePage} />

        <Redirect to='/'/>
        <Route path='/' component={HomePage}/>
      </Switch>
    </div>
  )
}

export default App;