import React from 'react'
import PictureIndexPhotos from '../pictures/picture_index_photos';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      userId: null,
    }
  }

  componentDidMount() {
    debugger
    this.props.fetchUser()
    this.props.fetchPictures()
  }

  render() {
    const pics = this.props.pictures.map(pic => {
      if (pic.id === this.props.session) {
        return <PictureIndexPhotos key={pic.id} pic={pic} />
      }
    })
    console.log(pics)
    debugger
    let { user } = this.props;
    user = user ? user : {};
    return (
      <div className="profile">
        <div className="user-info">
          <p>Hello, {user.username}!</p>
        </div>
        <div>
          {pics.length > 0 ? pics : <p>You don't have any pictures yet!</p>}
        </div>
      </div>
    )
  }
}

export default ProfileHeader