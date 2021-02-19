import React from 'react';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPictures();
  };

  render() {
    return(
      <div className='hello container'>
        <h3>You're here!</h3>
        <ul className='pic-index'>
          {this.props.pictures.map((picture, i) => {
            return (
              <li key={picture.id}
                className={i % 2 === 0 ? "a" : "b" }>
                <h2>{picture.title}</h2>
                <img className='display-img' src={picture.photoUrl} />
              </li>
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