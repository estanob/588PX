import React from 'react'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchPictures()
  }

  render() {
    debugger
    return (
      <div className="profile-parent-container">
        <div className="profile-header">
          <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=seaport-during-daytime-132037.jpg&fm=jpg" alt="header-image" />

        </div>
        <div className="profile-picture">
          <img src="https://i0.wp.com/www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg?w=1200&ssl=1" alt="profile-image" />
        </div>
        <div className="profile-user-info">
          {this.props.user.username}
        </div>
      </div>
    )
  }
}

export default ProfileHeader