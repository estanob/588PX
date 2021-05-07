import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = (props) => {
  console.log("PictureIndexItem Props:")
  console.log(props)
  const picture = props.picture;
  console.log(picture)
  return (
    <div className="individual-pic">
      <Link 
        to={`/pictures/${picture.id}`} 
        style={{ color: 'black', textDecoration: 'none' }}
        className='pic-link'>
        <img 
          className='display-img' 
          src={picture.photoUrl} 
          alt={picture.title} />
        <p className='pic-idx-itm-title'>{picture.title}</p>
      </Link>
    </div>
  )
};

export default PictureIndexItem;