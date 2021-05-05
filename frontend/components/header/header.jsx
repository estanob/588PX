import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from '../profile_dropdown/profile_dropdown';

class Header extends React.Component {
  isLoggedIn() {
    return (
      <div className="header">
        <ProfileDropdown 
          logout={this.props.logout} 
          userId={this.props.currentUser} />
        {/* <Link to={`/profile/${this.props.currentUser}`}>Profile</Link>
        <button onClick={() => this.props.logout()} 
          className='header_comps'>Logout</button> */}
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
      <>
        <Link onClick={this.props.clearErrors} to='/login' className='header_comps'>Login</Link>
        &nbsp; &nbsp;
        <Link onClick={this.props.clearErrors} to='/signup' className='header_comps sign-up'>Sign Up</Link>
      </>
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