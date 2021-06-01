import React from 'react';
import { Redirect, withRouter } from 'react-router';
import PictureIndexPhotos from '../pictures/picture_index_photos';
import GalleryIndexItem from './gallery_index_item';

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToGalleryIndex: false,
    }

    this.handleDelete = this.handleDelete.bind(this);
  };

  componentDidMount() {
    this.props.fetchGallery();
    this.props.fetchGalleries();
    this.props.fetchPictures();
  };
  
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGallery(this.props.gallery.id)
      .then(
        this.setState({
          redirectToGalleryIndex: true,
        })
      )
  };

  render() {
    let { 
      gallery, 
      session, 
      thisUser, 
      galleries, 
      pictures, 
    } = this.props;

    pictures = pictures ? pictures : [];
    gallery = gallery ? gallery : {};
    thisUser = thisUser ? thisUser : {};
    let galPics = gallery.pics ? gallery.pics : [];
    let creator = gallery ? gallery.creator : '';
    galleries = galleries ? galleries : [];
    let picIds = [];
    galPics.forEach(pic => picIds.push(pic.id));
    let pix = pictures.map((pic, i) => {
      if (picIds.includes(pic.id)) {
        return <li className="pics-on-profile-li" key={i}>
              <PictureIndexPhotos picture={pic} />
             </li>
      }
    })
    const ownGallery = () => {
      if (session === gallery.creator_id) {
        return (
          <div className="own-gallery">
            <button
              className='edit-delete'
              onClick={this.handleDelete}>Delete
            </button>
          </div>
        )
      }
    };

    const ownGals = galleries.map((gal, i) => {
      if (gal.id !== gallery.id && gal.creator_id === gallery.creator_id) {
        return (
          <li className="gals-on-profile-li" key={i}>
            <GalleryIndexItem 
              gallery={gal} 
              pics={pictures} 
              currentId={session} />
          </li>
        )
      }
    });

    const twoPlusGals = thisUser.galleries.length > 1 ? 
                        <div className='more-galleries'>
                          <p>More Galleries by {creator}</p>
                          <ul className="other-galleries">
                            {ownGals}
                          </ul>
                        </div> : '';

    const redirectToGalleryIndex = this.state.redirectToGalleryIndex;
    if (redirectToGalleryIndex) return <Redirect to='/home' />

    return(
      <div className='gallery-show'>
        <h1>{gallery.title}</h1>
        <p>Curated by {creator}</p>
        {ownGallery()}
        <div className='gallery-show-pics'>
          <ul className='pic-index pics-on-profile'>
            {pix}
          </ul>
        </div>
        {twoPlusGals}
      </div>
    ) 
  };
}

export default withRouter(GalleryShow);