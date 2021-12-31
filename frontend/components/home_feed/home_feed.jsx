import React, { useEffect } from 'react';
import PictureIndexItem from '../pictures/picture_index_item';
import PictureIndexContainer from '../pictures/picture_index_container';

const HomeFeed = props => {
  let { pictures, session, fetchPictures } = props;

  pictures = pictures ? pictures : [];
  session = session ? session : {};
  
  return (
    <div className='home-feed-parent'>
      <div className="home-feed-child">
        <div className="home-feed-header">Home Feed</div>
      </div>

      <div className="home-feed-pictures">
        <PictureIndexContainer />
      </div>
    </div>
  )
}

export default HomeFeed;