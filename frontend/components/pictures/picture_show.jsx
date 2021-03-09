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
      <>
        <div>
          <HeaderContainer />
          <div className='show display-img'>
            <img className='display-img' src={picture.photoUrl} alt={picture.title} />
            <p>Location: {picture.location}</p>
            <p>{picture.caption ? 'Caption: ' + picture.caption : ''}</p>
          </div>
        </div>
      </>
    ) 
  }
};

export default PictureShow;