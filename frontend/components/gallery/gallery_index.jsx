import React from 'react';

class GalleryIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGalleries();
    this.props.fetchGallery(this.props.galleryId);
  }
  
  render() {
    console.log(this.props)
    debugger
    return (
      <div className='galleries'>
        <h1>Hello, here are the galleries</h1>
      </div>
    )
  }
}

export default GalleryIndex;