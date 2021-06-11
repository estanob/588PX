import React from 'react';
import { Redirect, withRouter } from 'react-router';
import CreatorModal from '../modal/creator_modal';
import PictureIndexPhotos from '../pictures/picture_index_photos';
import GalleryIndexItem from './gallery_index_item';

class GalleryShow extends React.Component {
  constructor(props) {
    super(props)

    let followRelation = this.props.followRelation ? this.props.followRelation : null;
    this.state = {
      showModal: false,
      redirectToGalleryIndex: false,
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
    this.props.fetchGallery();
    this.props.fetchGalleries();
    this.props.fetchPictures();
    this.props.fetchPicturesToGalleries();
    this.props.fetchFollows();
  };

  componentDidUpdate(prevProps) {
    debugger
    let followRelation = this.props.followRelation ? this.props.followRelation : null;
    if (prevProps.followRelation !== this.props.followRelation) {
      this.setState({
        followRelation: followRelation, 
        isFollowing: followRelation ? true : false,
       })
    }
    debugger
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.props.gallery.picsToGals.forEach(picToGal => {
      this.props.deletePicturesToGallery(picToGal)
    })
    this.props.deleteGallery(this.props.gallery.id)
      .then(
        this.setState({
          redirectToGalleryIndex: true,
        })
      )
  };

  handleNewFollow(e) {
    e.preventDefault();
    let followRelation = this.props.followRelation ? this.props.followRelation : {};
    const followForm = new FormData();
    followForm.append('follow[user_id]', this.props.session);
    followForm.append('follow[followee_id]', this.props.gallery.creator_id);
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
      followee_id: this.props.gallery.creator_id,
    })
      .then(() => {
        this.setState({
          followRelation: followRelation,
          isFollowing: false,
        })
      })
  };

  otherUploader(gallery, session, followingIds, isFollowing) {
      if (gallery.creator_id !== session) {
        if (!isFollowing || !followingIds.includes(gallery.creator_id)) {
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
      gallery, 
      session, 
      thisUser, 
      galleries, 
      pictures,
      galCreator,
      users,
      followRelation,
      followingIds,
      openModal,
      creatorModal
    } = this.props;
    let { showModal, isFollowing } = this.state;

    pictures = pictures ? pictures : [];
    gallery = gallery ? gallery : {};
    thisUser = thisUser ? thisUser : {};
    let galPics = gallery.pics ? gallery.pics : [];
    let creator = gallery ? gallery.creator : '';
    galleries = galleries ? galleries : [];
    let picIds = [];
    galPics.forEach(pic => picIds.push(pic.id));
    let pix = pictures.map((pic, i) => {
      if (picIds.includes(pic.id)) {
        return <li className="pics-in-gallery-li" key={i}>
              <PictureIndexPhotos picture={pic} />
             </li>
      }
    })

    const ownGallery = () => {
      if (session === gallery.creator_id) {
        return (
          <div className="own-gallery">
            <button
              className='edit-delete'
              onClick={this.handleDelete}>Delete
            </button>
          </div>
        )
      }
    };

    const otherGals = galleries.map((gal, i) => {
      if (gal.id !== gallery.id && gal.creator_id === gallery.creator_id) {
        return (
          <li className="gals-on-profile-li" key={i}>
            <GalleryIndexItem 
              gallery={gal} 
              pics={pictures} 
              currentId={session} />
          </li>
        )
      }
    });

    const twoPlusGals = gallery.totalGalsFromUser > 1 ? 
                        <div className='more-galleries'>
                          <p>More Galleries by {creator}</p>
                          <ul className="other-galleries">
                            {otherGals}
                          </ul>
                        </div> : '';

    const creatorPics = [];
     pictures.filter(pic => {
      if (pic.uploader_id === gallery.creator_id) {
        creatorPics.push(pic)
      }
    });

    const ownGals = [];
     galleries.filter(gal => {
      if (gal.creator_id === gallery.creator_id) {
        ownGals.push(gal)
      }
    });

    const redirectToGalleryIndex = this.state.redirectToGalleryIndex;
    if (redirectToGalleryIndex) return <Redirect to='/home' />

    return(
      <div className='gallery-show'>
        {creatorModal}
        <h1>{gallery.title}</h1>
        <div>
          <p className="gallery-curated-by">Curated by&nbsp; {gallery.creator_id === session ? <p>you</p> : 
            <button 
              onClick={() => this.setState({ showModal: true })} 
                className="creator-button"
              creator={creator}>
                  {creator}
            </button>}
            {this.otherUploader(gallery, session, followingIds, isFollowing)}
            <CreatorModal
              creator={creator}
              owner={galCreator}
              userName={gallery.creatorUsername}
              pics={creatorPics}
              users={users}
              galleries={ownGals}
              showModal={showModal}
              closeModal={() => this.setState({ showModal: false })} />
          </p>
        </div>
        <p>{gallery.description}</p>
        {ownGallery()}
        <div className='gallery-show-pics'>
          <ul className='pics-in-gallery'>
            {pix}
          </ul>
        </div>
        {twoPlusGals}
      </div>
    ) 
  };
}

export default withRouter(GalleryShow);