import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = (props) => {
  const { gallery, pics }= props;
  gallery ? gallery : [];
  gallery.pics ? gallery.pics : [];
  pics ? pics : [];
  const thisGalPics = [];
  if (gallery.pics.length > 0) {
    for (let i = 0; i < gallery.pics.length; i++) {
      for (let j = 0; j < pics.length; j++) {
        let galPic = gallery.pics[i];
        let pic = pics[j];
        if (galPic.id === pic.id && !thisGalPics.includes(pic)) thisGalPics.push(pic)
      };
    };
  };
  let imgSrc = thisGalPics[0] ? thisGalPics[0].photoUrl : '';
  debugger
  return (
    <div className="individual-gal" key={gallery.id}>
      <Link 
        to={`/galleries/${gallery.id}`} 
        style={{ color: 'black', textDecoration: 'none' }}
        className='gal-link'>
        <img 
          className='display-img' 
          src={imgSrc}
          alt={gallery.title} />
        <p>{gallery.title}</p>
      </Link>
    </div>
  )
};

export default GalleryIndexItem;