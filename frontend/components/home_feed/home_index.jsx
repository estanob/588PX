import React from 'react';

class HomeIndex extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPictures()
  //   this.props.fetchLikes()
  // }

  render() {
    // const { pictures, like, createLike, deleteLike, session } = this.props
    // if (!pictures) return null;

    // const posts = pictures.map(picture => {
    //   return <PostIndexPhotos
    //     key={picture.id}
    //     picture={picture}
    //     like={like}
    //     createLike={createLike}
    //     deleteLike={deleteLike}
    //     userId={session}
    //   />
    // })

    return (
      <div>
        <div className='home-feed'>
          <h3>Success, You're logged in!</h3>
          {/* <ul className="home-grid-container-pictures" >
            {photos}
          </ul> */}
        </div>
      </div>
    )
  }
}
export default HomeIndex;