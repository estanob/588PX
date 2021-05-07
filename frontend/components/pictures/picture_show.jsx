import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete =this.handleDelete.bind(this);
  };

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchPicture();
  };
  
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePicture();
    return (
      <Redirect to='/home' />
    );
  };

  // componentDidUpdate instead
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Current Props:")
  //   console.log(this.props)
  //   console.log("Previous Props:")
  //   console.log(prevProps)
  // }

  render() {
    let { picture, session, users, createFollow, deleteFollow } = this.props;
    picture = picture ? picture : {};
    let uploader = picture.uploader ? picture.uploader : '';
    let currentUser = users[session];
    let numGalleries = picture.galleries ? picture.galleries.length : 0;
    
    const ownPicture = () => {
      if (session === picture.uploader_id) {
        return (
          <>
            <button className='edit-update'>
              <Link 
                style={{ color: 'white', textDecoration: 'none' }} 
                to={`/pictures/${picture.id}/edit`} >
                  <p>Edit</p>
              </Link>
            </button>
            <button 
              className='edit-delete' 
              onClick={this.handleDelete}>Delete
            </button>
          </>
        )
      }
    };

    const createNewFollow = () => {
      const userIdToFollow = picture.uploader_id;
      const currentUserId = session;
      createFollow({ followee_id: userIdToFollow })
        .then(() => this.props.fetchUser(currentUserId),
        this.render())
    };
    
    const destroyFollow = () => {
      const userIdToUnfollow = picture.uploader_id;
      const currentUserId = session;
      deleteFollow(userIdToUnfollow)
        .then(() => this.props.fetchUser(currentUserId),
          this.props.fetchPicture());
    };
    
    const newFollow = () => {
      createNewFollow();
    };
    
    const unfollow = () => {
      destroyFollow();
    };
    
    const otherUploader = () => {
      if (picture.uploader_id!== session) {
        if (!currentUser.followees.includes(picture.uploader_id)) {
          return <button 
          className='follow-button' 
          onClick={newFollow}>Follow</button>;
        } else {
          return <button 
          className='follow-button' 
          onClick={unfollow}>Unfollow</button>;
        }
      } else {
        return '';
      }
    };

    console.log(`Following: ${currentUser.followees.length}`);
    console.log(`Followers: ${currentUser.followers.length}`);
    console.log(`Galleries: ${numGalleries}`);
    console.log(this.props)
    return(
      <div>
        <HeaderContainer />
        <div className='img-container'>
          <img src={picture.photoUrl} alt={picture.title} />
        </div>
        <div className='show img-info'>
          {ownPicture()}
          <h1>{picture.title}</h1>
          <h3>Galleries: {numGalleries}</h3>
          <p>
            by {<Link 
                  to={`/profile/${picture.uploader_id}`} 
                  style={{ color: 'black', textDecoration: 'none'}}>
                    {uploader}
                {/* </Link>} */}
                </Link>} {otherUploader()}
          </p>
          <p>Uploaded: {picture.created_at}</p>
          <p>Location: {picture.location}</p>
          <p>{picture.caption ? picture.caption : ''}</p>
        </div>
      </div>
    ) 
  };
};

export default withRouter(PictureShow);