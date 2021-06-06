import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import TestModal from '../modal/test_modal';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      redirectToHomeFeed: false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewFollow = this.handleNewFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  };

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchPicture();
    this.props.fetchPictures();
    this.props.fetchGalleries();
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
    let { 
      picture, 
      session, 
      pictures,
      galleries,
      users, 
      picUploader,
      thisUser,
      creatorModal, 
      openModal, 
      closeModal } = this.props;
    let { showModal } = this.state;
    picture = picture ? picture : {};
    pictures = pictures ? pictures : {};
    galleries = galleries ? galleries : {};
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

    const userPics = [];
     pictures.filter(pic => {
      if (pic.uploader_id === picture.uploader_id) {
        userPics.push(pic)
      }
    });

    const creatorGals = [];
    galleries.filter(gal => {
      if (gal.creator_id === picture.uploader_id) {
        creatorGals.push(gal)
      }
    });

    const redirectToHomeFeed = this.state.redirectToHomeFeed;
    if (redirectToHomeFeed) return <Redirect to='/home' />

    return(
      <div>
        <HeaderContainer />
        <div className='pic-show-container'>
          <div className='img-container'>
            <div className='single-img'>
              <img src={picture.photoUrl} alt={picture.title} />
            </div>
          </div>
          <div className='show img-info'>
            {ownPicture()}
            <h1>{picture.title}</h1>
            <p className='uploader'>
              by&nbsp; {picture.uploader_id === session ? <p>you</p> : 
                <div><button onClick={() => this.setState({ showModal: true })}>{picture.uploaderName}</button>&nbsp; {otherUploader()}</div>}
                <TestModal 
                  creator={picture.uploaderName}
                  owner={picUploader}
                  userName={picture.uploader}
                  pics={userPics}
                  users={users}
                  galleries={creatorGals}
                  showModal={showModal} 
                  closeModal={() => this.setState({ showModal: false })} />
            </p>
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