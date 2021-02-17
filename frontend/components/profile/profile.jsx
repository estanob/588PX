import React from 'react'
import PostIndex from '../posts/post_index'
import ProfileHeader from './profile_header'

const Profile = ({ user, userId }) => {

  return (
    <div>
      <div>
        <ProfileHeader user={user} userId={userId} />
      </div>
      <div>
        <PostIndex />
      </div>
    </div>
  )
};

export default Profile;