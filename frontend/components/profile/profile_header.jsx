import React from 'react'
import PictureIndexItem from '../pictures/picture_index_item';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.fetchUser()
    this.props.fetchPictures()
  }

  render() {
    const pics = this.props.pictures.map(pic => {
      if (pic.id === this.props.session) {
        return <PictureIndexItem key={pic.id} pic={pic} />
      }
    })
    // console.log(pics)
    let { users, session } = this.props;
    console.log(this.props)
    console.log(users)
    let username = users[session].username;
    username ? username : '';
    debugger
    return (
      <div className="profile">
        <div className="user-info">
          <p>Hello, {username}!</p>
        </div>
        <div>
          {pics.length > 0 ? pics : <p>You don't have any pictures yet!</p>}
        </div>
      </div>
    )
  }
}

export default ProfileHeader