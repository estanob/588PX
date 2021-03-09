import React from 'react';
import { Link } from 'react-router-dom';

class PictureIndexItem extends React.Component {
  render() {
    const { picture } = this.props;
    return(
      <>
        <Link to={`/pictures/${picture.id}`}>
          <img className='display-img' src={picture.photoUrl} alt={picture.title} />
          <p>{picture.title}</p>
        </Link>
      </>
    )
  };
};

export default PictureIndexItem;