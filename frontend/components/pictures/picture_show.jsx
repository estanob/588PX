import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete =this.handleDelete.bind(this);
  };

  componentDidMount() {
    this.props.fetchPicture()
  };

  handleDelete(e) {
    debugger
    e.preventDefault()
    this.props.deletePicture();
  };
  
  render() {
    let { picture } = this.props;
    picture = picture ? picture : {};
    let uploader = picture.uploader ? picture.uploader : '';

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
          <p>by {uploader}</p>
          <p>Location: {picture.location}</p>
          <p>{picture.caption ? picture.caption : ''}</p>
        </div>
      </div>
    ) 
  };
};

export default withRouter(PictureShow);