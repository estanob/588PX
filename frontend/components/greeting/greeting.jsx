import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions'
import { demoLogin } from '../../actions/session_actions';
import HomeFeed from '../home_feed';
import HomeIndex from '../home_feed/home';


const Greeting = ({ currentUser, demoLogin, logout, openModal, users }) => {
  const sessionLinks = () => (
    <nav className="login-register"> 
      <button className="greeting-prompts login" onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button className="greeting-prompts register" onClick={() => openModal('register')}>Register</button>
    </nav>
  );

  const personalGreeting = () => (
    <div>
      <hgroup className="header-group">
        <h2 className="header-name">Hello, {users[currentUser].username}!</h2>
        {/* <HomeFeed/> */}
        <HomeIndex/>
        <p>Get noticed! Add more photos to your portfolio!</p>
        <button className="header-button" onClick={logout}>Log Out</button>
        <div>
        </div>
      </hgroup>
    </div>
  );
  
  return (
    currentUser ?
      personalGreeting(currentUser, login) :
      sessionLinks()
  );
};

export default Greeting;
