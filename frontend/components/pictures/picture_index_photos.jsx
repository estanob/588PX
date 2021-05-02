import React from 'react'
import { Link } from 'react-router-dom'


class PictureIndexPhotos extends React.Component {
  render() {
    const { picture } = this.props;
    return (
      <div>
        <li>
          <Link to={`/pictures/${picture.id}`}>
            <img 
              className='display-img for-profile' 
              // className='picture-index-img' 
              src={picture.photoUrl} 
              alt={picture.title} />
          </Link>
        </li>
      </div>
    )
  }
}

export default PictureIndexPhotos;