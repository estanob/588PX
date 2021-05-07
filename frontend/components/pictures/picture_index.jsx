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
    let pics = this.props.pictures.map((pic, i) => {
      return (
        <li className="pic-index-item">
          <PictureIndexItem 
            picture={pic} 
            key={i} />
        </li>
      )
    })

    pics = pics.sort(() => Math.random() - 0.5)

    return(
      <div className='pic-index-container'>
        <ul className='pic-index'>{pics}</ul>
      </div>
    );
  };
};

export default PictureIndex;
