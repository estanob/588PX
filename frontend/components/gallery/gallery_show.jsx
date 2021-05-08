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

    const ownGals = galleries.map(ownGal => {
      if (ownGal.creator === creator) {(
        <GalleryIndexGalleries key={ownGal.id} gallery={ownGal} />
      )}
    });

    return(
      <div className='gallery-show'>
        <h1>{gallery.title}</h1>
        <p>Curated by {creator}</p>
        {ownGallery()}
        <div className='gallery-show-pics'>
          <h2>Pics in the gallery will go here</h2>
        </div>
        <div className='more-galleries'>
          <p>More Galleries by {creator}</p>
          <h4>The other galleries will show up here</h4>
          {ownGals}
        </div>
      </div>
    ) 
  };
}

export default withRouter(GalleryShow);