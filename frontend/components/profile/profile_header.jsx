import React from 'react'
import PictureIndexPhotos from '../pictures/picture_index_photos';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.fetchUser(this.props.match.params.id)
    this.props.fetchPictures()
  }

  render() {
    const pics = this.props.pictures.map(pic => {
      if (pic.id === this.props.session) {
        return <PictureIndexPhotos key={pic.id} pic={pic} />
      } else {
        return <p>You don't have any pictures yet!</p>
      }
    })
    debugger
    return (
      <div className="profile">
        <div className="user-info">
          {this.props.user.username}
        </div>
        {pics}
      </div>
    )
  }
}

export default ProfileHeader