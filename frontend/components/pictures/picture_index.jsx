import React from 'react';
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
      <div className='pic-index-container'>
        <ul className='pic-index'>
          {this.props.pictures.map((picture, i) => {
            return (
              <li className="pic-index-item">
                <PictureIndexItem 
                  picture={picture} 
                  key={i} />
              </li>
            )
          })}
        </ul>
      </div>
    );
  };
};

export default PictureIndex;
