import React from 'react';
import HomeFeedContainer from './home_feed/home_feed_container';

const HomeFeed = props => {
  return (
    <div className='home-feed-parent'>
      <div className="home-feed-child">
        <div className="home-feed-header">Home Feed</div>
      </div>

      <div className="home-feed-pictures">
        <HomeFeedContainer />
      </div>
    </div>
  )
}

export default HomeFeed;