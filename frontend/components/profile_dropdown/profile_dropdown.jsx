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
      <ul id="profiledropdown">
        <li>
          <Link to={`/p/${users[currentUserId].username}`} className='dropdown-link'>Profile</Link>
        </li>
        <li>
          <Link to='/galleries' className='dropdown-link'>Galleries</Link>
        </li>
        <br/>
        <li onClick={logout}>Logout</li>
      </ul>
      {/* <ul id="profiledropdown">
        <Link to='/profile'>Profile</Link>
        <button id="profiledropdown" onClick={logout}>Logout</button>
      </ul> */}
    </div>
  );
};

export default ProfileDropdown;