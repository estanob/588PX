import React from 'react'
import GalleryIndexItem from '../gallery/gallery_index_item';
import ProfilePictureIndexItem from '../pictures/profile-picture-index-item';
import Modal from '../modal/modal';

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
      profileContent: 'Galleries',
    })
  };

  togglePictures(e) {
    e.preventDefault()
    this.setState({
      profileContent: 'Pictures',
    })
  };

  render() {
    const { 
      allUsers, 
      users, 
      session, 
      pictures, 
      galleries, 
      followersModal, 
      followingModal, 
    } = this.props;

    let profileContent = this.state.profileContent;

    const currentUser = users[session];
    const username = currentUser.username;
    allUsers ? allUsers : [];
    pictures ? pictures : [];
    currentUser ? currentUser : {};
    username ? username: '';
    let ownPics = pictures.map((ownPic, i) => {
      if (ownPic.uploader_id === session) {
        return <li className="pics-on-profile-li" key={i}>
                  <ProfilePictureIndexItem picture={ownPic} id={ownPic.id} />
                </li>
      }
    });

    ownPics = ownPics.sort(() => Math.random() -0.5)

    let picCount = 0;
    pictures.forEach(picture => {
      if (picture.uploader_id === session) picCount++;
    });
    let followers = users[session].followers.length;
    let following = users[session].followees.length;
    let galleryCount = users[session].galleries.length;
    
    const ownGals = galleries.map((gallery, i) => {
      if (gallery.creator_id === session) {
        return <li className="gals-on-profile-li" key={i}>
                  <GalleryIndexItem 
                    gallery={gallery}
                    pics={pictures} />
                </li>
      }
    });
    return (
      <div className="profile">
        <div className="user-info">
          <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
          <p>
            {followers} {followersModal} {following} {followingModal}
          </p>
          
        </div>
        <div className="profile-nav-tabs">
          <button className={profileContent === 'Pictures' ? 'profile-tab clicked' : 'profile-tab'} onClick={this.togglePictures}>
            Photos {picCount}
          </button>
          <button className={profileContent === 'Pictures' ? 'profile-tab' : 'profile-tab clicked'} onClick={this.toggleGalleries}>
            Galleries {galleryCount}
          </button>
        </div>
        {/* <ul className='profile-pic-index'> */}
        <ul className='pic-index pics-on-profile'>
          {profileContent === 'Pictures' ? ownPics : ownGals}
        </ul>
      </div>
    )
  };
};

export default Profile;