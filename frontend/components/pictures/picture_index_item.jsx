import React from 'react';
import { Link } from 'react-router-dom';

class PictureIndexItem extends React.Component {
  render() {
    const { picture, username } = this.props;

    return(
      <>
        <div>
          <h5>{picture.title}</h5>
          <p>by {username}</p>
          <p>{picture.location}</p>
          <p>{picture.caption}</p>
        </div>
        <Link>
          <img src={picture.photoUrl} alt={picture.title} />
        </Link>
      </>
    )
  };
};

export default PictureIndexItem;