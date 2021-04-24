import React from 'react';
import ProfileHeader from './profile_header';

const Profile = ({ user, userId }) => {
  debugger
  const user = props.user;
  const userId = props.userId;
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