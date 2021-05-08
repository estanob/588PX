import React from 'react'
import { Link } from 'react-router-dom';
import GalleryIndexItem from '../gallery/gallery_index_item';
// import OwnGallery from '../gallery/own_gallery';
import PictureIndexPhotos from '../pictures/picture_index_photos';

class Profile extends React.Component {
  constructor(props) {
    super(props)

    let profileContent = this.props.profileContent ? this.props.profileContent : '';
    this.state = {
      profileContent: profileContent,
    }

    this.toggleGalleries = this.toggleGalleries.bind(this);
    this.togglePictures = this.togglePictures.bind(this);
  };

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchAllUsers()
    this.props.fetchPictures()
    this.props.fetchGalleries()
  };

  toggleGalleries(e) {
    e.preventDefault()
    this.setState({
      profileContent: 'Galleries'
    })
  };

  togglePictures(e) {
    e.preventDefault()
    this.setState({
      profileContent: 'Pictures'
    })
  };

  render() {
    const { users, session, pictures, galleries } = this.props;
    let profileContent = this.state.profileContent;

    const username = users[session].username;
    username ? username: '';
    const ownPics = pictures.map((ownPic, i) => {
      if (ownPic.uploader_id === session) {
        return <li className="pics-on-profile-li">
                  <PictureIndexPhotos 
                    key={i} 
                    picture={ownPic} />
                </li>
      }
    });

    let picCount = 0;
    pictures.forEach(picture => {
      if (picture.uploader_id === session) picCount++;
    });
    let followers = users[session].followers.length;
    let following = users[session].followees.length;
    let galleryCount = users[session].galleries.length;
    
    const ownGals = galleries.map((gallery, i) => {
      if (gallery.creator_id === session) {
        return <li className="gals-on-profile-li">
                  <GalleryIndexItem 
                    key={i} 
                    gallery={gallery} />
                </li>
      }
    });

    return (
      <div className="profile">
        <div className="user-info">
          <h1>{username}</h1>
          <p>
            {followers} Followers {following} Following
          </p>
        </div>
        <div className="profile-nav-tabs">
          <button className="profile-tab" onClick={this.togglePictures}>
            Pictures {picCount}
          </button>
          <button className="profile-tab" onClick={this.toggleGalleries}>
            Galleries {galleryCount}
          </button>
        </div>
        <ul className='pic-index pics-on-profile'>
          {/* {ownPics} */}
          {profileContent === 'Pictures' ? ownPics : ownGals}
        </ul>
      </div>
    )
  };
};

export default Profile;