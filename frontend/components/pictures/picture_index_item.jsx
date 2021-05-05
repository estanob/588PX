import React from 'react';
import { Link } from 'react-router-dom';

const PictureIndexItem = (props) => {
  const picture = props.picture;
  console.log(picture);
  console.log(props);
  return (
    <div className="individual-pic">
      <Link 
        to={`/pictures/${picture.id}`} 
        style={{ color: 'black', textDecoration: 'none' }}>
        <img 
          className='display-img' 
          src={picture.photoUrl} 
          alt={picture.title} />
        <p>{picture.title}</p>
      </Link>
    </div>
  )
};

export default PictureIndexItem;