import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import GalleryIndexGalleries from './gallery_index_galleries';
import PictureIndexPhotos from '../pictures/picture_index_photos';
import PictureIndexItem from '../pictures/picture_index_item';
import PictureIndexContainer from '../pictures/picture_index_container';

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
    let { gallery, session, thisUser, galleries, pictures } = this.props;
    pictures = pictures ? pictures : [];
    gallery = gallery ? gallery : {};
    thisUser = thisUser ? thisUser : {};
    console.log("This User")
    console.log(thisUser)
    let galPics = gallery.pics ? gallery.pics : [];
    console.log("Gal Pics exists")
    console.log(galPics);
    let creator = gallery ? gallery.creator : '';
    galleries = galleries ? galleries : [];
    let picIds = [];
    galPics.forEach(pic => picIds.push(pic.id));
    console.log("Pic IDs:")
    console.log(picIds)
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

    const ownGals = galleries.map((ownGal, i) => {
      if (ownGal.creator === creator && ownGal.title !== gallery.title) {(
        <li key={i}>
          {/* <GalleryIndexGalleries key={ownGal.id} gallery={ownGal} /> */}
          {ownGal.title}
        </li>
      )}
    });



    const redirectToGalleryIndex = this.state.redirectToGalleryIndex;
    if (redirectToGalleryIndex) return <Redirect to='/home' />

    console.log("Gallery:")
    console.log(gallery)
    console.log("Galleries: ")
    console.log(galleries)
    return(
      <div className='gallery-show'>
        <h1>{gallery.title}</h1>
        <p>Curated by {creator}</p>
        {ownGallery()}
        <div className='gallery-show-pics'>
          <ul className='pic-index pics-on-profile'>
            {/* <PictureIndexContainer picIds={picIds} /> */}
            {pix}
          </ul>
        </div>
        <div className='more-galleries'>
          <p>More Galleries by {creator}</p>
          <h4>The other galleries will show up here</h4>
          {(gallery.creator_id === session && thisUser.galleries.length > 1) ? ownGals : <p>This User has no other Galleries</p>}
        </div>
      </div>
    ) 
  };
}

export default withRouter(GalleryShow);