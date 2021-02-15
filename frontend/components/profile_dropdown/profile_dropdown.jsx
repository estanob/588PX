import React from 'react'
import { Link } from 'react-router-dom'


// const ProfileDropdown = ({ logout, userId }) => {
const ProfileDropdown = ({ logout }) => {
  const triggerDropdown = () => {
    $('#profiledropdown').toggleClass('trigger')
  };

  return (
    <div id="profilepointer" onClick={triggerDropdown}>
      {/* <div >
        <i className="fas fa-user-alt fa-lg"></i>
      </div> */}
      <button id="profiledropdown" onClick={logout}>Logout</button>
      <ul id="profiledropdown">
        {/* <li><Link to={`/user/${userId.id}`} className="profileLink">Profile</Link></li>
        <li><Link to={`/posts`} className="profileLink">Galleries</Link></li>
        <br /> */}
        <li onClick={this.props.logout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;