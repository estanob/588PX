import React from 'react';
import { Link } from 'react-router-dom';

const GalleryShow = (props) => {
  // const gallery = props.gallery;
  console.log(props)
  return (
    <div className='gallery-show'>
      <Link to='/galleries'>All Galleries</Link>
      <p>Hello!!!</p>
      {/* <p>{gallery.title}</p> */}
    </div>
  )
}

export default GalleryShow;