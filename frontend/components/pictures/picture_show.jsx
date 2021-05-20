import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToHomeFeed: false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewFollow = this.handleNewFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  };

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchPicture();
  };

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePicture()
      .then(
        this.setState({
          redirectToHomeFeed: true,
        })
      )
  };


  handleNewFollow(e) {
    e.preventDefault();
    const followForm = new FormData();
    followForm.append('follow[user_id]', this.props.session.id);
    followForm.append('follow[followee_id]', this.props.picture.uploader_id);
    this.props.createFollow(followForm)
  };

  handleUnfollow(e) {
    e.preventDefault();
    this.props.deleteFollow({ 
      user_id: this.props.session, 
      followee_id: this.props.picture.uploader_id,
    })
  };

  render() {
    let { picture, session, users } = this.props;
    picture = picture ? picture : {};
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

    const otherUploader = () => {
      if (picture.uploader_id!== session) {
        if (!currentUser.followees.includes(picture.uploader_id)) {
          return <button 
                    className='follow-button' 
                    onClick={this.handleNewFollow}>Follow
                  </button>;
        } else {
          return <button 
                    className='follow-button' 
                    onClick={this.handleUnfollow}>Unfollow
                  </button>;
        }
      } else {
        return '';
      }
    };

    const redirectToHomeFeed = this.state.redirectToHomeFeed;
    if (redirectToHomeFeed) return <Redirect to='/home' />

    // const redirectToProfilePage = this.state.redirectToProfilePage;
    // if (redirectToProfilePage) return <Redirect 
    //                                     to='/home' />
                                        // to={`/p/${currentUser.username}`} />
    return(
      <div>
        <HeaderContainer />
        <div className='img-container'>
          <img src={picture.photoUrl} alt={picture.title} />
        </div>
        <div className='show img-info'>
          {ownPicture()}
          <h1>{picture.title}</h1>
          <p className='uploader'>
            by {<Link 
                  to={`/p/${picture.uploader}`} 
                  style={{ color: 'black', textDecoration: 'none'}}
                  className='pic-show-uploader'>
                    <p>
                      {`${picture.uploaderFirstName} ${picture.uploaderLastName}`}
                    </p>
                </Link>}&nbsp; {otherUploader()}
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