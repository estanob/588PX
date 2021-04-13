import React from 'react';
import HomeIndexContainer from './home_feed/home_index_container';

class HomeFeed extends React.Component {
  render() {
    return (
      <div className='home-page-parent'>
        <div className="home-page-child">
          <div className="home-page-header">Home Feed</div>
        </div>
  
        <div className="home-page-images">
          <HomeIndexContainer />
        </div>
      </div>
    )
  }
}

export default HomeFeed;