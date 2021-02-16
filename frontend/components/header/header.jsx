import React from 'react'
import { Link } from 'react-router-dom'
// import ProfileDropdown from '../profile_dropdown/profile_dropdown'

class Header extends React.Component {
  isLoggedIn() {
    return (
      <div>
        {/* <h2>Welcome! Log in successful!</h2> */}
        {/* <ProfileDropdown logout={this.props.logout} userId={this.props.currentUser}/> */}
        <button onClick={() => this.props.logout()}>Logout</button>
      </div>
    )
  }

  isLoggedOut() {
    return (
      <div>
        <Link onClick={this.props.clearErrors} to='/login' className='header_comps'>Login</Link>
        &nbsp; &nbsp;
        <Link onClick={this.props.clearErrors} to='/signup' className='header_comps sign-up'>Sign Up</Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? this.isLoggedIn() : this.isLoggedOut()}
      </div>
    )
  }
}

export default Header;