import React from 'react';
import { Link } from 'react-router-dom';
import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPictures();
    this.props.fetchPicture(this.props.pictureId);
  };

  render() {
    return(
      <div className='hello'>
        <ul className='pic-index'>
          {this.props.pictures.map((picture, i) => {
            return (
              <PictureIndexItem 
              picture={picture} 
              key={i} />
            );
          })}
        </ul>
      </div>
    )
  };
};

export default PictureIndex;









































// import React from 'react'
// import PictureIndexPhotos from './picture_index_photos'

// class PictureIndex extends React.Component {
//   componentDidMount() {
//     this.props.fetchPictures()
//   }

//   render() {

//     if (!this.props.pictures) return null;

//     const photos = this.props.pictures.map(picture => {
//       if (picture.uploader_id === this.props.session) {
//         return <PictureIndexPhotos key={picture.id} picture={picture} />
//       }
//     })

//     for (let i = (photos.length - 1); i > 0; i--) {
//       const j = Math.floor(Math.random() * i)
//       const temp = photos[i]
//       photos[i] = photos[j]
//       photos[j] = temp
//     }

//     return (
//       <div className="picture-index-photos-conatiner">
//         <div className="picture-index-grid-container">
//           <div className="picture-index-grid-inner">
//             <ul className="picture-index-grid-container-photos" >
//               {photos}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// };

// export default PictureIndex;