import React from 'react';
import HomeFeedContainer from './home_feed/home_feed_container';

class HomeFeed extends React.Component {
  render() {
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
}

export default HomeFeed;