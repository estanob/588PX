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
