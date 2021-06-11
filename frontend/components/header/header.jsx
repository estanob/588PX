import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from '../profile_dropdown/profile_dropdown';

class Header extends React.Component {
  isLoggedIn() {
    return (
      <div className="header">
        <p>{`Hello ${this.props.currentUser.username}!`}</p>
        <ProfileDropdown 
          logout={this.props.logout} 
          session={this.props.session}
          currentUser={this.props.currentUser} />
        <Link onClick={this.props.createPicture} 
          to='/upload'
          className='header_comps sign-up upload'>
            Upload
        </Link>
      </div>
    )
  }

  isLoggedOut() {
    return (
      <div className="header">
        <Link onClick={this.props.clearErrors} to='/login' className='header_comps login'>Login</Link>
        &nbsp; &nbsp;
        <Link onClick={this.props.clearErrors} to='/signup' className='header_comps sign-up'>Sign Up</Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.session ? this.isLoggedIn() : this.isLoggedOut()}
      </div>
    )
  }
}

export default Header;