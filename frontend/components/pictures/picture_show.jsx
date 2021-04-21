import React from 'react';
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
    e.preventDefault()
    this.props.deletePicture();
  };
  
  render() {
    const { picture } = this.props;
    if (!picture) return null;
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
          <br/>
          <p>Location: {picture.location}</p>
          <br/>
          <p>{picture.caption ? picture.caption : ''}</p>
        </div>
      </div>
    ) 
  };
};

export default PictureShow;