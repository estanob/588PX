import React, { useEffect, useState } from 'react'
import GalleryIndexItem from '../gallery/gallery_index_item';
import ProfilePictureIndexItem from '../pictures/profile-picture-index-item';
import LikesModal from '../modal/likes_modal';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  let { 
    users,
    session,
    allUsers,
    pictures,
    galleries,
    profileContent,
    numFollowers,
    numFollowees,
    followersModal,
    followingModal,
    fetchUser,
    fetchAllUsers,
    fetchPictures,
    fetchGalleries,
  } = props;
  users = users ? users : {};
  session = session ? session : '';
  profileContent = profileContent ? profileContent : '';
  allUsers = allUsers ? allUsers : [];
  pictures = pictures ? pictures : [];
  galleries = galleries ? galleries : [];
  numFollowers = numFollowers ? numFollowers : 0;
  numFollowees = numFollowees ? numFollowees : 0;

  let [whichContent, setWhichContent] = useState(profileContent);
  let [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // fetchUser()
    fetchAllUsers()
    fetchPictures()
    fetchGalleries()
  }, []);
  
  const currentUser = users[session] ? users[session] : {};
  const followers = currentUser.followers.length;
  const following = currentUser.followees.length;
  const photoLikes = currentUser.likedPics ? currentUser.likedPics.length : 0;

  const toggleGalleries = () => {
    setWhichContent('Galleries')
  }

  const togglePictures = () => {
    setWhichContent('Pictures')
  }

  let picCount = 0;
  pictures.forEach(picture => {
    if (picture.uploader_id === session) picCount++;
  });
  const galleryCount = users[session].galleries.length;
  const picsOrGals = profileContent === 'Pictures' ? 'profile-pic-index' : 'profile-pic-index profile-gals';
  let ownPics = pictures.map((ownPic, i) => {
    if (ownPic.uploader_id === session) {
      return (
        <li className="pics-on-profile-li" key={i}>
          <ProfilePictureIndexItem picture={ownPic} id={ownPic.id} />
        </li>
      )
    }
  });

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
      if (gallery.creator_id === session) return (
        <li className="gals-on-profile-li" key={i}>
          <GalleryIndexItem 
            gallery={gallery}
            pics={pictures} />
        </li>
      )
    })
  }
  
  return (
    <div className="profile">
      <div className="user-info">
        <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
        <p>
          {followers} {followersModal} {following} {followingModal} <button 
                                                                      className="creator-button"
                                                                      onClick={() => setShowModal(true)}>
                                                                      {photoLikes} Photo Likes     
                                                                    </button>
        </p>
        <LikesModal 
          allUsers={allUsers}
          showModal={showModal}
          session={session}
          allPhotos={pictures}
          closeModal={() => setShowModal(false)} />
        
      </div>
      <div className="profile-nav-tabs">
        <button className={whichContent === 'Pictures' ? 'profile-tab clicked' : 'profile-tab'} onClick={togglePictures}>
          Photos {picCount}
        </button>
        <button className={whichContent === 'Pictures' ? 'profile-tab' : 'profile-tab clicked'} onClick={toggleGalleries}>
          Galleries {galleryCount}
        </button>
      </div>
      <div className={picsOrGals}>
        <ul className='pics-on-profile'>
          {whichContent === 'Pictures' ? ownPics : ownGals}
        </ul>
      </div>
    </div>
  )
};

export default Profile;