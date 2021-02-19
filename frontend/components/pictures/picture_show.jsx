import React from 'react';

class PictureShow extends React.Component {
  render() {
    const { picture } = this.props;
    if (!picture) return null;

    const pictureArray = Array.isArray(picture.photoUrl) ? picture.photoUrl : [picture.photoUrl];
    const photo = pictureArray.map((url, i) => {
      return <img src={url} key={i} className='picture-show-img'/>
    })

    return(
      <>
        <div>
          {photo}
        </div>
      </>
    ) 
  }
};

export default PictureShow;