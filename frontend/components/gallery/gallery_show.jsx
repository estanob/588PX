import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import GalleryIndexGalleries from './gallery_index_galleries';
import PictureIndexPhotos from '../pictures/picture_index_photos';

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchGallery();
    this.props.fetchPictures();
  };
  
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGallery();
    return (
      <Redirect to='/galleries' />
    );
  };

  render() {
    debugger
    let { gallery, session, users, galleries, pictures } = this.props;
    pictures = pictures ? pictures : [];
    gallery = gallery ? gallery : {};
    let picsInGal = gallery.pics ? gallery.pics : [];
    let creator = gallery.creator ? gallery.creator : '';
    // let galPics = pictures.map(picture => {
    //   if (gallery.pics.includes(picture)) {
    //     return (
    //       <li className="pics-on-profile-li">
    //         <PictureIndexPhotos key={picture.id} picture={picture} />
    //       </li>
    //     )
    //   }
    // });
    console.log(picsInGal)
    const ownGallery = () => {
      if (session === gallery.creator_id) {
        return (
          <div className="own-gallery">
            <button className='edit-update'>
              <Link 
                style={{ color: 'white', textDecoration: 'none' }} 
                to={`/galleries/${gallery.id}/edit`} >
                  <p>Edit</p>
              </Link>
            </button>
            <button 
              className='edit-delete' 
              onClick={this.handleDelete}>Delete
            </button>
          </div>
        )
      }
    };

    let galPics = picsInGal.map(picture => {
      return (
        <li className="pics-on-profile-li">
          <PictureIndexPhotos picture={picture} key={picture.id} />
        </li>
      )
    })

    const ownGals = galleries.map(ownGal => {
      if (ownGal.creator === creator) {(
        <GalleryIndexGalleries key={ownGal.id} gallery={ownGal} />
      )}
    });

    console.log(gallery)
    console.log(picsInGal)
    debugger
    return(
      <div className='gallery-show'>
        <h1>{gallery.title}</h1>
        <p>Curated by {creator}</p>
        {ownGallery()}
        <div className='gallery-show-pics'>
          <h2>Pics in the gallery will go here</h2>
          <ul className='pic-index pics-on-profile'>
            {picsInGal.length === 0 ? "This gallery doesn't have any pictures yet" : galPics}
          </ul>
        </div>
        <div className='more-galleries'>
          <p>More Galleries by {creator}</p>
          <h4>The other galleries will show up here</h4>
          {/* {ownGals} */}
        </div>
      </div>
    ) 
  };
}

export default withRouter(GalleryShow);