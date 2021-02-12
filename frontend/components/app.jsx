import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';
import HomePage from './home_page';

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/" className="header-link">
          <h1>588PX</h1>
        </Link>
        <nav>
          <GreetingContainer />
        </nav>
      </header>
      <Modal />
      <Switch>
        <Route exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/register" component={RegisterFormContainer}/>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App;