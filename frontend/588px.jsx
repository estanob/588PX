import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { login, logout, register} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const rootEle = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // const closeDropdown = (e) => {
  //   if(e.target.className !== '#profilepointer') {
  //     $('#profiledropdown').removeClass('trigger')
  //   }
  // } 

  // document.addEventListener('click', closeDropdown)

  window.login = login;
  window.logout = logout;
  window.register = register;
  ReactDOM.render(<Root store={store}/>, rootEle);
  // ReactDOM.render(<h1>Hello!</h1>, rootEle);
});