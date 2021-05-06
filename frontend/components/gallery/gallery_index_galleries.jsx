import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexGalleries = props => {
  const { gallery } = props;
  return (
    <div>
      <li>
        <Link to={`galleries/${gallery.id}`}
              className='gal-idx-gals'>
          <p>{gallery.title}</p>
        </Link>
      </li>
    </div>
  )
}

export default GalleryIndexGalleries;