import React, { useEffect } from 'react';
import PictureIndexItem from './picture_index_item';

const PictureIndex = (props) => {
  let {
    pictures,
    session,
    fetchPictures,
  } = props;

  pictures = pictures ? pictures : [];
  session = session ? session : '';
  let pics = pictures.map((pic, i) => {
    return (
      <li className="pic-index-item" key={i}>
        <PictureIndexItem 
          picture={pic}
          currentId={session} />
      </li>
    )
  })
  pics = pics.sort(() => Math.random() - 0.5);
  
  useEffect(() => {
    fetchPictures()
  }, [])
  
  return (
    <div className='pic-index-container'>
      <ul className='pic-index'>{pics}</ul>
    </div>
  )
};

export default PictureIndex;