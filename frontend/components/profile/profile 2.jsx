import React from 'react';
import ProfileHeader from './profile_header';

const Profile = ({ user, userId }) => {
  const user = props.user;
  const userId = props.userId;
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