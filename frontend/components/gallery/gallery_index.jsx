import React from 'react';
import { Link } from 'react-router-dom';
import GalleryIndexItem from './gallery_index_item';

class GalleryIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGalleries();
    this.props.fetchGallery(this.props.galleryId);
    this.props.fetchPictures();
    this.props.fetchPicturesToGalleries();
  }
  
  render() {
    let { galleries, pictures, session } = this.props;
    pictures ? pictures : [];
    session ? session : '';
    galleries = galleries.sort(() => Math.random() - 0.5)
    return (
      <div className='galleries'>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" 
            clipRule="evenodd" 
            d="M16.47 7.53H23.2935C23.4807 7.5296 23.6604 7.6037 23.793 7.73596C23.9255 7.86822 24 8.04776 24 8.235V23.2935C24.0004 23.481 23.9261 23.6609 23.7935 23.7935C23.6609 23.9261 23.481 24.0004 23.2935 24H8.235C8.04776 24 7.86822 23.9255 7.73596 23.793C7.6037 23.6604 7.5296 23.4807 7.53 23.2935V16.47H0.706503C0.519266 16.4704 0.339561 16.3963 0.207023 16.264C0.0744852 16.1318 1.58867e-06 15.9522 1.58867e-06 15.765V0.706503C-0.000396167 0.519006 0.0739102 0.339072 0.206491 0.206491C0.339072 0.0739102 0.519006 -0.000396167 0.706503 1.58867e-06H15.765C15.9522 1.58867e-06 16.1318 0.0744852 16.264 0.207023C16.3963 0.339561 16.4704 0.519266 16.47 0.706503V7.53ZM1.4115 1.4085V15.0585H15.0615V1.4085H1.4115ZM8.9385 22.5885H22.5885V8.9415H16.47V15.765C16.4704 15.9521 16.3963 16.1317 16.264 16.264C16.1317 16.3963 15.9521 16.4704 15.765 16.47H8.9385V22.5885ZM8.9415 7.53H12C12.2599 7.51802 12.5054 7.64985 12.6389 7.87315C12.7724 8.09644 12.7724 8.37506 12.6389 8.59836C12.5054 8.82166 12.2599 8.95349 12 8.9415H8.9415V12C8.95349 12.2599 8.82166 12.5054 8.59836 12.6389C8.37506 12.7724 8.09644 12.7724 7.87315 12.6389C7.64985 12.5054 7.51802 12.2599 7.53 12V8.9415H4.47C4.09287 8.92411 3.79605 8.61329 3.79605 8.23575C3.79605 7.85822 4.09287 7.54739 4.47 7.53H7.53V4.47C7.54739 4.09287 7.85822 3.79605 8.23575 3.79605C8.61329 3.79605 8.92411 4.09287 8.9415 4.47V7.53Z" 
            fill="#222222"></path>
        </svg>
        <h1>Curate photos using Galleries</h1>
        <p>Build a Gallery to show off your style or to keep track of what inspires you!</p>
        <Link to='/galleries/new'
              className='new-gallery'>
          Create New Gallery
        </Link>
        <ul className='gallery-index'>
          {galleries.map((gal, i) => {
            return (
              <GalleryIndexItem
                gallery={gal}
                pics={pictures}
                currentId={session}
                key={i}>
                  {gal.title}
              </GalleryIndexItem>
            )
          })}
        </ul>
      </div>
    );
  };
};

export default GalleryIndex;