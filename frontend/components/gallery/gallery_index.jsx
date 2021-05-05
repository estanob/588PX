import React from 'react';
import GalleryIndexItem from './gallery_index_item';

class GalleryIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGalleries();
    this.props.fetchGallery(this.props.galleryId);
  }
  
  render() {
    const { galleries } = this.props;
    debugger
    return (
      <div className='galleries'>
        <h1>Hello, here are the galleries of all users</h1>
        <ul className='gallery-index'>
          {galleries.map((gal, i) => {
            return (
              <GalleryIndexItem
                gallery={gal}
                key={i} />
            )
          })}
        </ul>
      </div>
    );
  };
};

export default GalleryIndex;