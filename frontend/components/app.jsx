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
import HomePage from './home_page';
import Header from './header/header';

const App = () => {
  return (
    <div className="app">
      <header>
        {/* <Link to="/" className="header-link">
          <h1>588PX</h1>
        </Link> */}
        <nav>
          <GreetingContainer />
        </nav>
        <li><Header/></li>
      </header>
      <Modal />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/register" component={RegisterFormContainer}/>
        <AuthRoute path="/" component={HomePage} />

        <Redirect to='/'/>
        <Route path='/' component={HomePage}/>
      </Switch>
    </div>
  )
}

export default App;