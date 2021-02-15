import { Route, NavLink } from 'react-router-dom';
import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1 className="five88px_header active">
          <NavLink to='/'>588PX</NavLink>
        </h1>
        <div className="navbar">
          {/* <NavLink to='/' >Discover</NavLink> */}
          <a href="https://github.com/estanob">GitHub</a>
          {/* <a href="#">LinkedIn</a> */}
        </div>
      </div>
    )
  }
}