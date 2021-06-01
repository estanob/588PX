import React from 'react'
import { Link } from 'react-router-dom'


const PictureIndexPhotos = props => {
  const { picture } = props;
  return (
    <Link to={`/pictures/${picture.id}`}>
      <img 
        className='display-img for-profile' 
        src={picture.photoUrl} 
        alt={picture.title} />
    </Link>
  )
}

// class PictureIndexPhotos extends React.Component {
//   render() {
//     const { picture } = this.props;
//     return (
//       <Link to={`/pictures/${picture.id}`}>
//         <img 
//           className='display-img for-profile' 
//           // className='picture-index-img' 
//           src={picture.photoUrl} 
//           alt={picture.title} />
//       </Link>
//     )
//   }
// }

export default PictureIndexPhotos;