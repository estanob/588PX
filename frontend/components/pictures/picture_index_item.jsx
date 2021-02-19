import React from 'react';
import { Link } from 'react-router-dom';

class PictureIndexItem extends React.Component {
  render() {
    const { photo, username } = this.props;

    return(
      <>
        <div>
          <h5>{photo.title}</h5>
          <p>by {username}</p>
          <p>{photo.location}</p>
          <p>{photo.caption}</p>
        </div>
        <Link>
          <img src={photo.photoUrl} alt={photo.title} />
        </Link>
      </>
    )
  };
};

export default PictureIndexItem;