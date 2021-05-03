import React from 'react'
import PictureIndexPhotos from '../pictures/picture_index_photos';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchPictures()
  }

  render() {
    let { users, session, pictures } = this.props;
    let username = users[session].username;
    username ? username : '';
    const ownPics = pictures.map(ownPic => {
      if (ownPic.uploader_id === session) {
        return <PictureIndexPhotos key={ownPic.id} picture={ownPic} />
      }
    });
    let ownCount = 0;
    pictures.forEach(pic => {
      if (pic.uploader_id === session) ownCount++;
    });
    console.log(ownCount)
    return (
      <div className="profile">
        <div className="user-info">
          <p>Hello, {username}!</p>
        </div>
        <h1>Pictures ({ownCount}):</h1>
        <ul className='pic-index profile-pics'>
          {ownPics}
        </ul>
      </div>
    )
  }
}

export default ProfileHeader