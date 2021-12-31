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
      likedByCurrentUser: this.props.likedByUser ? true : false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewFollow = this.handleNewFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.otherUploader = this.otherUploader.bind(this);
  };

  componentDidMount() {
    this.props.fetchUser(this.props.session);
    this.props.fetchAllUsers();
    this.props.fetchPicture();
    this.props.fetchPictures();
    this.props.fetchPictureLikes();
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

  handleLike(e) {
    // debugger
    e.preventDefault();
    const likeForm = new FormData();
    likeForm.append('picture_like[liker_id]', this.props.session);
    likeForm.append('picture_like[picture_id]', this.props.picture.id);
    this.props.createLike(likeForm)
      .then(() => {
        this.setState({
          likedByCurrentUser: true,
        })
      })
    // debugger
  };

  handleUnlike(e) {
    // debugger
    e.preventDefault();
    let pictureLike = this.props.likedByUser ? this.props.likedByUser : {};
    this.props.deleteLike(pictureLike)
      .then(() => {
        this.setState({
          likedByCurrentUser: false,
        })
      })
    // debugger
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
      likedByUser,
      followRelation,
      owner,
      newGalleryButton,
      followingIds 
    } = this.props;
    
    let { 
      showModal, 
      isFollowing, 
      redirectToHomeFeed, 
      likedByCurrentUser 
    } = this.state;

    let picLikes = picture ? picture.likes : [];
    picture = picture ? picture : {};
    users = users ? users : [];
    session = session ? session : '';
    currentUser = currentUser ? currentUser : {};
    newGalleryButton = newGalleryButton ? newGalleryButton : {};
    likedByUser = likedByUser ? likedByUser : false;
    likedByCurrentUser = likedByCurrentUser ? likedByCurrentUser : false;
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

    const notLikedButton = <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                              <path 
                                fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M22.1752 2.9322L22.1658 2.9228C21.0104 
                                  1.69572 19.3996 1 17.7142 1C16.0287 1 14.418 
                                  1.69572 13.2626 2.9228L12.0005 4.23995L10.7384 
                                  2.9228C9.58121 1.69427 7.96779 0.99854 6.28007 
                                  1.00032C4.59236 1.0021 2.98041 1.70123 1.82581 
                                  2.9322C-0.608605 5.52036 -0.608605 9.55603 
                                  1.82581 12.1442L11.544 22.288C11.6633 22.4124 
                                  11.8282 22.4828 12.0005 22.4828C12.1729 
                                  22.4828 12.3377 22.4124 12.457 22.288L22.1752 
                                  12.1442C24.6083 9.5555 24.6083 5.52089 
                                  22.1752 2.9322ZM21.2622 11.2701L11.9978 
                                  20.9373L2.73345 11.2701C0.759025 9.16831 
                                  0.763144 5.89237 2.74285 3.79553C3.66011 
                                  2.81795 4.94091 2.26339 6.28144 
                                  2.26339C7.62196 2.26339 8.90276 2.81795 
                                  9.82002 3.79553L11.544 5.59067C11.7977 5.83903 
                                  12.2033 5.83903 12.457 5.59067L14.1756 
                                  3.79553C15.0947 2.81543 16.379 2.26027 17.7226 
                                  2.26231C19.0662 2.26435 20.3488 2.82339 
                                  21.2649 3.80627C23.2365 5.90359 23.2365 9.1728 
                                  21.2649 11.2701H21.2622Z" 
                                fill="#222222">
                              </path>
                            </svg>;

    const likedButton = <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0__Wiv0MOmd)">
                            <path 
                              d="M22.2 2.9C21 1.7 19.4 1 17.7 1C16 1 14.4 1.7 
                                13.2 2.9L12 4.2L10.7 2.9C9.5 1.7 8 1 6.3 1C4.6 1 
                                3 1.7 1.8 2.9C-0.6 5.4 -0.6 9.6 1.8 12.1L11.5 
                                22.2C11.6 22.3 11.8 22.4 12 22.4C12.2 22.4 12.3 
                                22.3 12.5 22.2L22.2 12.1C24.6 9.6 24.6 5.5 22.2 
                                2.9Z" 
                              fill="#c22b3f">
                            </path>
                          </g>
                          <defs>
                            <clipPath id="clip0__Wiv0MOmd">
                              <rect 
                                y="1" 
                                width="24" 
                                height="21.5" 
                                fill="white">
                              </rect>
                            </clipPath>
                          </defs>
                        </svg>;

    let likeOrUnlike = !likedByCurrentUser ? ((e) => this.handleLike(e)) : ((e) => this.handleUnlike(e));
    console.log("Do you like this picture?")
    console.log(likedByCurrentUser)
    console.log("Picture Like exists?")
    console.log(likedByUser)
    console.log("Picture's Likes")
    console.log(picLikes)
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
            <div className="pic-title-and-likes">
              <button className="like-button" onClick={likeOrUnlike}>
                {likedByUser ? likedButton : notLikedButton} &nbsp;
              </button>
              <Link to="/galleries/new">
                {newGalleryButton}
              </Link>
            </div>
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