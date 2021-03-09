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
          <div className='show'>
            <img src={picture.photoUrl} alt={picture.title} />
          </div>
        </div>
      </>
    ) 
  }
};

export default PictureShow;