import React from 'react'
import { Route, NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1 className="five88px_header active">
          <NavLink to='/'>588PX</NavLink>
        </h1>
        <div className="navbar">
          <a href="https://github.com/estanob">
            Github
          </a>
          <a href="https://linkedin.com/in/estanob">
            LinkedIn
          </a>
          <a href="https://angel.co/u/brandon-estano">
            AngelList
          </a>
        </div>
      </div>
    )
  }
}