import React from 'react';
import { Link } from 'react-router-dom';


const ProfileDropdown = ({ logout, session, currentUser }) => {
  const triggerDropdown = () => {
    $('#profiledropdown').toggleClass('trigger')
  };
  return (
    <div id="profilepointer" onClick={triggerDropdown}>
      <span className='user-pic'></span>
      <ul id="profiledropdown">
        <li>
          <Link to={`/p/${currentUser.username}`} className='dropdown-link'>Profile</Link>
        </li>
        <li>
          <Link to='/galleries' className='dropdown-link'>Galleries</Link>
        </li>
        <br/>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;