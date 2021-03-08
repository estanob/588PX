import React from 'react';
import { Link } from 'react-router-dom';

class PictureIndexItem extends React.Component {
  render() {
    const { picture, title, username } = this.props;

    return(
      <>
        {/* <div>
          <h5>{title}</h5>
          <p>by {username}</p>
          <p>{picture.location}</p>
          <p>{picture.caption}</p>
        </div> */}
        <Link to={`/pictures/${picture.id}`}>
          <img className='display-img' src={picture.photoUrl} alt={title} />
          <p>{picture.title}</p>
        </Link>
      </>
    )
  };
};

export default PictureIndexItem;