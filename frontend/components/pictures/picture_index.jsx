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
    let { pictures } = this.props;
    pictures = pictures ? pictures : [];
    let pics = pictures.map((pic, i) => {
      return (
        <li className="pic-index-item" key={i}>
          <PictureIndexItem 
            picture={pic} />
        </li>
      )
    })
    pics = pics.sort(() => Math.random() - 0.5);
    return(
      <div className='pic-index-container'>
        <ul className='pic-index'>{pics}</ul>
      </div>
    );
  };
};

export default PictureIndex;
