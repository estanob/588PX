import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = (props) => {
  const { picture, currentId } = props;
  const ownPic = (currentId === picture.uploader_id) ? '#1890ff' : 'black';
  return (
    <div className="individual-pic">
      <Link 
        to={`/pictures/${picture.id}`} 
        style={{ color: ownPic, textDecoration: 'none' }}
        className='pic-link'>
        <img 
          src={`${picture.photoUrl}`} 
          alt={`${picture.title}`} />
        <p className='pic-idx-itm-title'>{picture.title}</p>
      </Link>
    </div>
  )
};

export default PictureIndexItem;