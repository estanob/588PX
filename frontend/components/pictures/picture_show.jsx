import React from 'react';
import {Link} from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPicture()
  }
  
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
          <Link to={`/pictures/${picture.id}/edit`}><p>Edit</p></Link>
          <h1>{picture.title}</h1>
          <br/>
          <p>Location: {picture.location}</p>
          <br/>
          <p>{picture.caption ? picture.caption : ''}</p>
        </div>
      </div>
    ) 
  }
};

export default PictureShow;