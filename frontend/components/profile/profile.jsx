import React from 'react'
import ProfileHeader from './profile_header'

const Profile = ({ user, userId }) => {
  debugger
  user = user ? user : {};
  userId = userId ? userId : '';
  console.log(`user = ${user}`);
  console.log(`userId = ${userId}`);
  return (
    <div>
      <div className='profile'>
        <p>Hello World</p>
      </div>
      <ProfileHeader user={user} userId={userId} />
    </div>
  )
};

export default Profile;