import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete =this.handleDelete.bind(this);
    this.createFollow = this.createFollow.bind(this);
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
    let currentUserId = this.props.session;
    let userIdToFollow = this.props.picture.uploader_id;
    this.props.createFollow({ followee_id: userIdToFollow })
      .then(() => this.props.fetchUser(this.props.currentUserId))
  }

  // deleteFollow(e) {

  // }
  
  render() {
    let { picture, session } = this.props;
    picture = picture ? picture : {};
    let uploader = picture.uploader ? picture.uploader : '';
    const otherUploader = picture.uploader_id !== session ?
      <button 
        className='follow-button' 
        onClick={this.createFollow}>Follow</button> : '';
    // let currentUserId = session;
    // let userIdToFollow = picture.uploader_id;
    debugger
    return(
      <div>
        <HeaderContainer />
        <div className='img-container'>
          <img src={picture.photoUrl} alt={picture.title} />
        </div>
        <div className='show img-info'>
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
          <h1>{picture.title}</h1>
          <p>
            by {<Link 
                  to={`/profile/${picture.uploader_id}`} 
                  style={{ color: 'black', textDecoration: 'none'}}>
                    {uploader}
                </Link>} {otherUploader}
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