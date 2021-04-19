import React from 'react';
import HomeFeedContainer from './home_feed/home_feed_container';

class HomeFeed extends React.Component {
  render() {
    return (
      <div className='home-page-parent'>
        <div className="home-page-child">
          <div className="home-page-header">Home Feed</div>
        </div>
  
        <div className="home-page-images">
          <HomeFeedContainer />
        </div>
      </div>
    )
  }
}

export default HomeFeed;