import React from 'react';
import HeaderContainer from '../header/header_container';

class PictureShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPicture()
  }
  
  render() {
    const { picture } = this.props;
    if (!picture) return null;
    return(
      <div>
        <HeaderContainer />
        <div className='img-container'>
          <img src={picture.photoUrl} alt={picture.title} />
        </div>
        <div className='show display-img'>
          <h1>{picture.title}</h1>
          <p>Location: {picture.location}</p>
          <p>{picture.caption ? 'Caption: ' + picture.caption : ''}</p>
        </div>
      </div>
    ) 
  }
};

export default PictureShow;