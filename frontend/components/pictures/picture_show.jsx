import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)

    // let picture = this.props.picture ? this.props.picture : {};
    // let users = this.props.users ? this.props.users : [];
    // let session = this.props.session ? this.props.session : '';
    // this.state = {
    //   picture: picture,
    //   users: users,
    //   session: session,
    // };

    this.handleDelete =this.handleDelete.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.deleteFollow = this.deleteFollow.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    // this.ownPicture = this.ownPicture.bind(this);
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

  createFollow(e) {
    debugger
    e.preventDefault()
    let userIdToFollow = this.props.picture.uploader_id;
    // this.props.createFollow(userIdToFollow)
    // this.props.createFollow()
    this.props.createFollow({ followee_id: userIdToFollow })
    .then(() => this.props.fetchUser(userIdToFollow))
    // .then(() => this.props.fetchUser(this.props.currentUserId))
  }
  
  deleteFollow(e) {
    debugger
    e.preventDefault()
    let userIdToUnfollow = this.props.picture.uploader_id;
    // this.props.deleteFollow()
    // this.props.deleteFollow({ user_id: currentUser, followee_id: userIdToUnfollow })
    this.props.deleteFollow(this.props.picture.uploader_id)
      .then(() => this.props.fetchUser(this.props.session))
  }

  refreshPage() {
    window.location.reload()
  }
  
  render() {
    let { picture, session, users } = this.props;
    picture = picture ? picture : {};
    let uploader = picture.uploader ? picture.uploader : '';
    let currentUser = users[session];

    const ownPicture = () => {
      debugger

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

      // session === picture.uploader_id ? (
      //   <>
      //     <button className='edit-update'>
      //       <Link 
      //         style={{ color: 'white', textDecoration: 'none' }} 
      //         to={`/pictures/${picture.id}/edit`} >
      //           <p>Edit</p>
      //       </Link>
      //     </button>
      //     <button 
      //       className='edit-delete' 
      //       onClick={this.handleDelete}>Delete
      //     </button>
      //   </>
      // ) : '';
    };

    const otherUploader = () => {
      debugger
      if (picture.uploader_id!== session) {
        if (!currentUser.followees.includes(picture.uploader_id)) {
          return <button 
                  className='follow-button' 
                  onClick={this.createFollow, this.refreshPage}>Follow</button>;
        } else {
          return <button 
                  className='follow-button' 
                  onClick={this.deleteFollow, this.refreshPage}>Unfollow</button>;
        }
      } else {
        return '';
      }
    };
    console.log(currentUser.followees);
    console.log(`state: ${this.state}`);
    return(
      <div>
        <HeaderContainer />
        <div className='img-container'>
          <img src={picture.photoUrl} alt={picture.title} />
        </div>
        <div className='show img-info'>
          {ownPicture()}
          {/* <button className='edit-update'>
            <Link 
              style={{ color: 'white', textDecoration: 'none' }} 
              to={`/pictures/${picture.id}/edit`} >
                <p>Edit</p>
            </Link>
          </button>
          <button 
            className='edit-delete' 
            onClick={this.handleDelete}>Delete
          </button> */}
          <h1>{picture.title}</h1>
          <p>
            by {<Link 
                  to={`/profile/${picture.uploader_id}`} 
                  style={{ color: 'black', textDecoration: 'none'}}>
                    {uploader}
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