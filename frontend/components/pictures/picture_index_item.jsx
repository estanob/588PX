import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = (props) => {
  debugger
  console.log(props)
  const picture = props.picture;
  const id = props.id
  return (
    <div className="individual-pic">
      <Link 
        to={`/pictures/${id}`} 
        style={{ color: 'black', textDecoration: 'none' }}
        className='pic-link'>
        <img 
          className='display-img' 
          src={`${picture.photoUrl}`} 
          alt={`${picture.title}`} />
        <p className='pic-idx-itm-title'>{picture.title}</p>
      </Link>
    </div>
  )
};

export default PictureIndexItem;