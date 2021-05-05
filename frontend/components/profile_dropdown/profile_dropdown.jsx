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
      <ul>
        <li id="profiledropdown">
          <Link to={`/profile/${currentUserId}`}>Profile</Link>
        </li>
        <li>
          <button id="profiledropdown" onClick={logout}>Logout</button>
        </li>
      </ul>
      {/* <ul id="profiledropdown">
        <Link to='/profile'>Profile</Link>
        <button id="profiledropdown" onClick={logout}>Logout</button>
      </ul> */}
    </div>
  );
};

export default ProfileDropdown;