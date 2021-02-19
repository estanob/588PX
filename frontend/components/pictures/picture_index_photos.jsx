import React from 'react'
import { Link } from 'react-router-dom'


class PictureIndexPhotos extends React.Component {
  render() {
    const { picture } = this.props;
    return (
      <div>
        <h3>You're here!!!</h3>
        <li className='picture-index-img-li'>
          <div className="like-container">
            <Link to={`/pictures/${picture.id}`}>
              <img className='picture-index-img' src={picture.photoUrl} />
            </Link>
          </div>
        </li>
      </div>
    )
  }
}

export default PictureIndexPhotos;