import React from 'react';
import PictureIndexContainer from '../pictures/picture_index_container';

class HomeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPictures()
  }
  
  render() {
    return (
      <div>
        <div className='home-feed'>
          <h3>Home Feed</h3>
          <PictureIndexContainer />
        </div>
      </div>
    )
  }
}
export default HomeIndex;