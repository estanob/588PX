import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import CreatorModal from '../modal/creator_modal';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)

    let followRelation = this.props.followRelation ? this.props.followRelation : null;
    this.state = {
      showModal: false,
      redirectToHomeFeed: false,
      followRelation: followRelation,
      isFollowing: followRelation ? true : false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewFollow = this.handleNewFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.otherUploader = this.otherUploader.bind(this);
  };

  componentDidMount() {
    this.props.fetchUser(this.props.session);
    this.props.fetchAllUsers();
    this.props.fetchPicture();
    this.props.fetchPictures();
    this.props.fetchGalleries();
    this.props.fetchFollows();
  };

  componentDidUpdate(prevProps) {
    let followRelation = this.props.followRelation ? this.props.followRelation : null;
    if (prevProps.followRelation !== this.props.followRelation) {
      this.setState({
        followRelation: followRelation, 
        isFollowing: followRelation ? true : false,
       })
    }
  }

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
    let followRelation = this.props.followRelation ? this.props.followRelation : {};
    const followForm = new FormData();
    followForm.append('follow[user_id]', this.props.session.id);
    followForm.append('follow[followee_id]', this.props.picture.uploader_id);
    this.props.createFollow(followForm)
      .then(() => {
        this.setState({
          followRelation: followRelation,
          isFollowing: true,
        })
      })
  };

  handleUnfollow(e) {
    e.preventDefault();
    let followRelation = this.props.followRelation ? this.props.followRelation : {};
    this.props.deleteFollow({ 
      user_id: this.props.session, 
      followee_id: this.props.picture.uploader_id,
    })
      .then(() => {
        this.setState({
          followRelation: followRelation,
          isFollowing: false,
        })
      })
  };

  otherUploader(picture, session, followingIds, isFollowing) {
      if (picture.uploader_id !== session) {
        if (!isFollowing || !followingIds.includes(picture.uploader_id)) {
          return <button
                    className='follow-button'
                    onClick={this.handleNewFollow}>
                      Follow
                 </button>
        } else {
          return <button
                    className='follow-button'
                    onClick={this.handleUnfollow}>
                      Unfollow
                 </button>
        }
      }
    }

  render() {
    let { 
      picture, 
      session, 
      pictures,
      galleries,
      users, 
      currentUser,
      followRelation,
      owner,
      followingIds } = this.props;
    let { showModal, isFollowing, redirectToHomeFeed } = this.state;
    picture = picture ? picture : {};
    users = users ? users : [];
    session = session ? session : '';
    currentUser = currentUser ? currentUser : {};
    owner = owner ? owner : {};
    followRelation = followRelation ? followRelation : {};
    pictures = pictures ? pictures : {};
    galleries = galleries ? galleries : {};
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
          {ownPicture()}
          <div className='pic-info'>
            <h1>{picture.title}</h1>
            <p>{picture.caption ? picture.caption : ''}</p>
            <div className='uploader'>
              <p className='picture-show-by'>by&nbsp; {picture.uploader_id === session ? <p className="picture-show-by">you</p> : 
                <div>
                  <button 
                    className="creator-button" 
                    onClick={() => this.setState({ showModal: true })}>
                      {picture.uploaderName}
                  </button>
                  {this.otherUploader(picture, session, followingIds, isFollowing)}
                </div>}</p>
                <CreatorModal 
                  creator={picture.uploaderName}
                  owner={owner}
                  userName={picture.uploader}
                  pics={userPics}
                  users={users}
                  scrollable={true}
                  galleries={creatorGals}
                  showModal={showModal} 
                  closeModal={() => this.setState({ showModal: false })} />
            </div>
            <p>Uploaded: {picture.created_at}</p>
            <p>Location: {picture.location}</p>
          </div>
          {redirectToHomeFeed}
        </div>
      </div>
    ) 
  };
};

export default withRouter(PictureShow);