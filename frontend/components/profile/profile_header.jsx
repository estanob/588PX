import React from 'react'
import PictureIndexPhotos from '../pictures/picture_index_photos';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchPictures()
  };

  render() {
    const { users, session, pictures } = this.props;
    const username = users[session].username;
    username ? username : '';
    const ownPics = pictures.map(ownPic => {
      if (ownPic.uploader_id === session) {
        return <PictureIndexPhotos key={ownPic.id} picture={ownPic} />
      }
    });
    let following = users[session].followees.length;
    let followers = users[session].followers.length;
    let ownCount = 0;
    pictures.forEach(pic => {
      if (pic.uploader_id === session) ownCount++;
    });
    return (
      <div className="profile">
        <div className="user-info">
          <h1>{username}</h1>
          <p>{followers} Followers {following} Following</p>
        </div>
        <h1>Pictures {ownCount}</h1>
        <ul className='pic-index pics-on-profile'>
          {ownPics}
        </ul>
      </div>
    )
  };
};

export default ProfileHeader;