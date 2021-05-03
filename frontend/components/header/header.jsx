import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from '../profile_dropdown/profile_dropdown';

class Header extends React.Component {
  isLoggedIn() {
    return (
      <div>
        <Link to={`/profile/${this.props.currentUser}`}>Profile</Link>
        <ProfileDropdown logout={this.props.logout} 
          userId={this.props.currentUser} />
        <button onClick={() => this.props.logout()} 
          className='header_comps'>Logout</button>
        <Link onClick={this.props.createPicture} 
          to='/upload'
          className='header_comps sign-up'>
            Upload
        </Link>
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
    debugger
    return (
      <div>
        {this.props.currentUser ? this.isLoggedIn() : this.isLoggedOut()}
      </div>
    )
  }
}

export default Header;