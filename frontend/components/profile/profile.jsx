import React from 'react'
import PictureIndexPhotos from '../pictures/picture_index_photos';

class Profile extends React.Component {
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
    console.log(this.props)
    return (
      <div className="profile">
        <div className="user-info">
          <h1>{username}</h1>
          <p>
            {followers} Followers {following} Following
          </p>
        </div>
        <div className="profile-tabs">
          <h1>
            Pictures {picCount} Galleries {galleryCount}
          </h1>
        </div>
        <ul className='pic-index pics-on-profile'>
          {ownPics}
        </ul>
      </div>
    )
  };
};

export default Profile;