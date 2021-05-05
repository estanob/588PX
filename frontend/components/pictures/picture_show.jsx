import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete =this.handleDelete.bind(this);
    // this.createNewFollow = this.createNewFollow.bind(this);
    // this.destroyFollow = this.destroyFollow.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    // this.newFollow = this.newFollow.bind(this);
    // this.unfollow = this.unfollow.bind(this);
  };

  componentDidMount() {
    this.props.fetchPicture();
  };
  
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePicture();
    return (
      <Redirect to='/home' />
    );
  };

  // createNewFollow() {
  // // createNewFollow(e) {
  //   debugger
  //   // e.preventDefault()
  //   let currentUserId = this.props.session;
  //   let userIdToFollow = this.props.picture.uploader_id;
  //   // this.props.createFollow(userIdToFollow)
  //   // this.props.createFollow()
  //   this.props.createFollow({ followee_id: userIdToFollow })
  //   .then(() => this.props.fetchUser(currentUserId))

  //   // const followForm = new Follow();
  //   // followForm.append('follow[user_id', this.props.session);
  //   // followForm.append('follow[followee_id]', this.props.picture.uploader_id);

  //   // this.props.createFollow(followForm);
  // }
  
  // destroyFollow() {
  // // destroyFollow(e) {
  //   debugger
  //   // e.preventDefault()
  //   let userIdToUnfollow = this.props.picture.uploader_id;
  //   // this.props.deleteFollow()
  //   // this.props.deleteFollow({ user_id: currentUser, followee_id: userIdToUnfollow })
  //   this.props.deleteFollow(this.props.picture.uploader_id)
  //     .then(() => this.props.fetchUser(this.props.session))
  // }

  refreshPage() {
    window.location.reload()
  }
  
  
  render() {
    let { picture, session, users, createFollow, deleteFollow } = this.props;
    picture = picture ? picture : {};
    let uploader = picture.uploader ? picture.uploader : '';
    let currentUser = users[session];
    
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
      debugger
      const userIdToFollow = picture.uploader_id;
      const currentUserId = session;
      createFollow({ followee_id: userIdToFollow })
        .then(() => this.props.fetchUser(currentUserId));
      
      // const followForm = new Follow();
      // followForm.append('follow[user_id', this.props.session);
      // followForm.append('follow[followee_id]', this.props.picture.uploader_id);
      
      // this.props.createFollow(followForm);
    };
    
    const destroyFollow = () => {
      debugger
      const userIdToUnfollow = picture.uploader_id;
      const currentUserId = session;
      deleteFollow(userIdToUnfollow)
        .then(() => this.props.fetchUser(currentUserId));
    };
    
    const newFollow = () => {
      createNewFollow();
      this.refreshPage();
    };
    
    const unfollow = () => {
      destroyFollow();
      this.refreshPage();
    };
    
    const otherUploader = () => {
      debugger
      if (picture.uploader_id!== session) {
        if (!currentUser.followees.includes(picture.uploader_id)) {
          return <button 
          className='follow-button' 
          onClick={newFollow()}>Follow</button>;
        } else {
          return <button 
          className='follow-button' 
          onClick={unfollow()}>Unfollow</button>;
        }
      } else {
        return '';
      }
    };

    console.log(`Following: ${currentUser.followees.length}`);
    console.log(`Followers: ${currentUser.followers.length}`);
    debugger
    return(
      <div>
        <HeaderContainer />
        <div className='img-container'>
          <img src={picture.photoUrl} alt={picture.title} />
        </div>
        <div className='show img-info'>
          {ownPicture()}
          <h1>{picture.title}</h1>
          <h3>Galleries:</h3>
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