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
      .then(() => {
        this.setState({
          redirectToHomeFeed: true,
        })
      })
  };

  handleUnfollow(e) {
    e.preventDefault();
    this.props.deleteFollow({ 
      user_id: this.props.session, 
      followee_id: this.props.picture.uploader_id,
    })
      .then(() => {
        this.setState({
          redirectToHomeFeed: true,
        })
      })
  };

  render() {
    let { picture, session, users, creatorModal, openModal } = this.props;
    picture = picture ? picture : {};
    let currentUser = users[session];
    
    const ownPicture = () => {
      if (session === picture.uploader_id) {
        return (
          <div className='own-pic'>
            <button className='edit-update'>
              <Link 
                style={{ color: 'white', textDecoration: 'none' }} 
                to={`/pictures/${picture.id}/edit`} >
                  <p>Edit</p>
              </Link>
            </button>&nbsp;
            <button 
              className='edit-delete' 
              onClick={this.handleDelete}>Delete
            </button>
          </div>
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

    return(
      <div>
        <HeaderContainer />
        <div className='pic-show-container'>
          {creatorModal}
          <div className='img-container'>
            <div className='single-img'>
              <img src={picture.photoUrl} alt={picture.title} />
            </div>
          </div>
          <div className='show img-info'>
            {ownPicture()}
            <h1>{picture.title}</h1>
            <p className='uploader'>
              by&nbsp; {picture.uploader_id === session ? <p>you</p> : <button 
                    onClick={openModal}
                    className='pic-uploader'>
                      <p>
                        {`${picture.uploaderName}`}
                      </p>
                  </button>}&nbsp; {otherUploader()}
            </p>
            {/* <p className='uploader'>
              by&nbsp; {picture.uploader_id === session ? <p>you</p> : <Link 
                    to={`/p/${picture.uploader}`} 
                    style={{ color: 'black', textDecoration: 'none'}}
                    className='pic-show-uploader'>
                      <p>
                        {`${picture.uploaderName}`}
                      </p>
                  </Link>}&nbsp; {otherUploader()}
            </p> */}
            <p>Uploaded: {picture.created_at}</p>
            <p>Location: {picture.location}</p>
            <p>{picture.caption ? picture.caption : ''}</p>
          </div>
          {redirectToHomeFeed}
        </div>
      </div>
    ) 
  };
};

export default withRouter(PictureShow);