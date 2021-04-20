import React from 'react';
import { Link } from 'react-router-dom';

class PictureIndexItem extends React.Component {
  render() {
    const { picture } = this.props;
    return(
      <div>
        <Link 
          to={`/pictures/${picture.id}`} 
          style={{ color: 'black', textDecoration: 'none' }}>
          <img 
            className='display-img' 
            src={picture.photoUrl} 
            alt={picture.title} />
          <p>{picture.title}</p>
        </Link>
      </div>
    )
  };
};

export default PictureIndexItem;