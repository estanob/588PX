import React from 'react'
import ProfileHeader from './profile_header'

const Profile = ({ user, userId }) => {
  debugger
  console.log(`user = ${user}`);
  console.log(`userId = ${userId}`);
  return (
    <div>
      <div className='profile'>
        <p>Hello World</p>
      </div>
    </div>
  )
};

export default Profile;