import React from 'react';

class HomeIndex extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPictures()
  //   this.props.fetchLikes()
  // }

  render() {
    // const { posts, like, createLike, deleteLike, session } = this.props
    // const { posts } = this.props
    // if (!posts) return null;

    // const photos = posts.map(post => {
    //   return <PostIndexPhotos
    //     key={post.id}
    //     post={post}
    //     like={like}
    //     createLike={createLike}
    //     deleteLike={deleteLike}
    //     userId={session}
    //   />
    // })

    return (
      <div>
        <h3>You're logged in!</h3>
        {/* <ul className="home-grid-container-pictures" >
          {photos}
        </ul> */}
      </div>
    )
  }
}
export default HomeIndex;