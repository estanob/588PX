import React from 'react';
import { Link } from 'react-router-dom';


const ProfileDropdown = ({ logout, currentUserId, users }) => {
  const triggerDropdown = () => {
    $('#profiledropdown').toggleClass('trigger')
  };
  console.log(currentUserId)
  console.log(users)
  return (
    <div id="profilepointer" onClick={triggerDropdown}>
      <span className='user-pic'></span>
      <button id="profiledropdown" onClick={logout}>Logout</button>
      <ul id="profiledropdown">
        <li><Link to="/profile">Profile</Link></li>
        <li><button>Hello</button></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;