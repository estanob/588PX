import React from 'react';
import GalleryIndexItem from './gallery_index_item';

const OwnGallery = (props) => {
  console.log('Own Gallery Props:')
  console.log(props)
  return (
    <div className='own-gallery'>
      <GalleryIndexItem />
    </div>
  );
};

export default OwnGallery;