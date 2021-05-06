import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import GalleryIndexGalleries from './gallery_index_galleries';

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchGallery();
  };
  
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGallery();
    return (
      <Redirect to='/galleries' />
    );
  };

  render() {
    let { gallery, session, users, galleries } = this.props;
    gallery = gallery ? gallery : {};
    let creator = gallery.creator ? gallery.creator : '';
    let currentUser = users[session];
    
    const ownGallery = () => {
      if (session === gallery.creator_id) {
        return (
          <div className="">
            <button className='edit-update own-gallery'>
              <Link 
                style={{ color: 'white', textDecoration: 'none' }} 
                to={`/galleries/${gallery.id}/edit`} >
                  <p>Edit</p>
              </Link>
            </button>
            <button 
              className='edit-delete own-gallery' 
              onClick={this.handleDelete}>Delete
            </button>
          </div>
        )
      }
    };

    const ownGals = galleries.map(ownGal => {
      if (ownGal.creator === creator) {(
        <GalleryIndexGalleries key={ownGal.id} gallery={ownGal} />
      )}
    });

    // debugger
    return(
      <div className='gallery-show'>
        <h1>{gallery.title}</h1>
        <p>Curated by {creator}</p>
        {ownGallery()}
        <div className='more-galleries'>
          <p>More Galleries by {creator}</p>
          {ownGals}
        </div>
      </div>
      
      // <div>
      //   <HeaderContainer />
      //   <div className='img-container'>
      //     <img src={gallery.photoUrl} alt={gallery.title} />
      //   </div>
      //   <div className='show img-info'>
      //     {ownGallery()}
      //     <h1>{gallery.title}</h1>
      //     <h3>Galleries: {numGalleries}</h3>
      //     <p>
      //       by {<Link 
      //             to={`/profile/${gallery.creator_id}`} 
      //             style={{ color: 'black', textDecoration: 'none'}}>
      //               {creator}
      //           {/* </Link>} */}
      //           </Link>} {otherUploader()}
      //     </p>
      //     <p>Uploaded: {gallery.created_at}</p>
      //     <p>Location: {gallery.location}</p>
      //     <p>{gallery.caption ? gallery.caption : ''}</p>
      //   </div>
      // </div>
    ) 
  };
}

export default withRouter(GalleryShow);