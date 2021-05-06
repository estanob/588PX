import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = (props) => {
  const gallery = props.gallery;
  console.log("Gallery:")
  console.log(gallery);
  console.log("Props:")
  console.log(props);
  return (
    <div className="individual-gal">
      <Link 
        to={`/galleries/${gallery.id}`} 
        // style={{ color: 'black', textDecoration: 'none' }}>
        style={{ color: 'black', textDecoration: 'none' }}
        className='gal-link'>
        {/* <img 
          className='display-img' 
          src={GalleryPic} 
          alt={gallery.title} /> */}
        <p>{gallery.title}</p>
      </Link>
    </div>
  )
};

export default GalleryIndexItem;