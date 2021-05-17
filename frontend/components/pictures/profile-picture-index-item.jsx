import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePictureIndexItem = (props) => {
  const picture = props.picture;
  const id = props.id;
  return (
    <Link
      to={`/pictures/${id}`}
      style={{ color: 'black', textDecoration: 'none' }}
      className='pic-link'>
      <img
        className='profile-img'
        src={`${picture.photoUrl}`}
        alt={`${picture.title}`} />
    </Link>
  )
}

export default ProfilePictureIndexItem;