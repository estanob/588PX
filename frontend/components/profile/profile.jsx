import React from 'react'
import GalleryIndexItem from '../gallery/gallery_index_item';
import ProfilePictureIndexItem from '../pictures/profile-picture-index-item';
import LikesModal from '../modal/likes_modal';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)

    let profileContent = this.props.profileContent ? this.props.profileContent : '';
    this.state = {
      showModal: false,
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
    let { 
      allUsers, 
      users, 
      session, 
      pictures, 
      galleries, 
      followersModal, 
      followingModal, 
    } = this.props;

    let { showModal, profileContent } = this.state;

    const currentUser = users[session] ? users[session] : {};
    const username = currentUser.username;
    allUsers ? allUsers : [];
    pictures ? pictures : [];
    username ? username: '';
    let ownPics = pictures.map((ownPic, i) => {
      if (ownPic.uploader_id === session) {
        return <li className="pics-on-profile-li" key={i}>
                  <ProfilePictureIndexItem picture={ownPic} id={ownPic.id} />
                </li>
      }
    });


    let picCount = 0;
    pictures.forEach(picture => {
      if (picture.uploader_id === session) picCount++;
    });

    const noContent = <div className='profile-no-content'>
                      <p>You don't have any photos yet.</p>
                      <p>
                        <Link 
                          className="link-no-content" 
                          to="/upload">
                            Upload Photos
                        </Link>
                      </p>
                    </div>;
    ownPics = picCount > 0 ? ownPics.sort(() => Math.random() -0.5) : noContent;
      
    let followers = users[session].followers.length;
    let following = users[session].followees.length;
    let galleryCount = users[session].galleries.length;
    
    let ownGals;

    if (galleryCount === 0 && picCount === 0) {
      ownGals = noContent
    } else if (galleryCount === 0 && picCount > 0) {
      ownGals = <Link 
                  to='/galleries/new'
                  className='new-gallery'>
                    Create New Gallery
                </Link>
    } else {
      ownGals = galleries.map((gallery, i) => {
                  if (gallery.creator_id === session) return <li className="gals-on-profile-li" key={i}>
                              <GalleryIndexItem 
                                gallery={gallery}
                                pics={pictures} />
                            </li>
                  })
    }
    const picsOrGals = profileContent === 'Pictures' ? 'profile-pic-index' : 'profile-pic-index profile-gals';

    let photoLikes = currentUser.likedPics ? currentUser.likedPics.length : 0;
    
    return (
      <div className="profile">
        <div className="user-info">
          <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
          <p>
            {followers} {followersModal} {following} {followingModal} <button 
                                                                        className="creator-button"
                                                                        onClick={() => this.setState({ showModal: true })}>
                                                                        {photoLikes} Photo Likes     
                                                                      </button>
          </p>
          <LikesModal 
            allUsers={allUsers}
            showModal={showModal}
            session={session}
            allPhotos={pictures}
            closeModal={() => this.setState({ showModal: false })} />
          
        </div>
        <div className="profile-nav-tabs">
          <button className={profileContent === 'Pictures' ? 'profile-tab clicked' : 'profile-tab'} onClick={this.togglePictures}>
            Photos {picCount}
          </button>
          <button className={profileContent === 'Pictures' ? 'profile-tab' : 'profile-tab clicked'} onClick={this.toggleGalleries}>
            Galleries {galleryCount}
          </button>
        </div>
        <div className={picsOrGals}>
          <ul className='pics-on-profile'>
            {profileContent === 'Pictures' ? ownPics : ownGals}
          </ul>
        </div>
      </div>
    )
  };
};

export default Profile;