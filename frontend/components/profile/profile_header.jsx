import React from 'react'
import PictureIndexPhotos from '../pictures/picture_index_photos';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchAllUsers()
    this.props.fetchPictures()
  };

  render() {
    const { users, session, pictures } = this.props;
    const username = users[session].username;
    username ? username : '';
    const ownPics = pictures.map(ownPic => {
      if (ownPic.uploader_id === session) {
        return <li className="pics-on-profile-li">
                  <PictureIndexPhotos 
                    key={ownPic.id} 
                    picture={ownPic} />
                </li>
      }
    });
    let following = users[session].followees.length;
    let followers = users[session].followers.length;
    let picCount = 0;
    pictures.forEach(pic => {
      if (pic.uploader_id === session) picCount++;
    });
    let galleryCount = 0;
    return (
      <div className="profile">
        <div className="user-info">
          <h1>{username}</h1>
          <p>{followers} Followers {following} Following</p>
        </div>
        <h1>Pictures {picCount} Galleries {galleryCount}</h1>
        <ul className='pic-index pics-on-profile'>
          {ownPics}
        </ul>
      </div>
    )
  };
};

export default ProfileHeader;