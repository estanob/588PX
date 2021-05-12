import React from 'react';
import { Redirect } from 'react-router-dom';
import PictureIndexItem from '../pictures/picture_index_item';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    let title = this.props.title ? this.props.title : '';
    let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';

    this.state = {
      title: title,
      creator_id: creatorId,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // componentDidMount() {
  //   this.props.fetchPictures();
  // }

  componentDidUpdate(prevProps) {
    let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';
    if (prevProps.title !== this.props.title) {
      this.setState({
        title: this.props.title,
        creator_id: creatorId,
      })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault()
    const galForm = new FormData();
    galForm.append('gallery[id]', this.props.gallery.id);
    galForm.append('gallery[title]', this.state.title);
    galForm.append('gallery[creator_id]', this.state.creator_id);

    console.log(galForm)
    if (galForm) {
      this.props.action(galForm)
        .then(
          this.setState({
            title: '',
            redirect: true,
          })
        );
    }
  };
  
  render() {
    let { thisUser, formType, gallery, pictures } = this.props;
    gallery = gallery ? gallery : {};
    const { title } = this.state;
    let whichHeader = formType === 'Create Gallery' ? 'Create a Gallery' : 'Edit Gallery';
    let whatButton = formType === 'Create Gallery' ? 'Create' : 'Save Changes';
    const redirectToHomeFeed = this.state.redirect;
    if (redirectToHomeFeed) return <Redirect to='/galleries' />
    let userPics = pictures.map((picture, i) => {
      if (thisUser.pictures.includes(picture.id)) {
        return <li>
                  <PictureIndexItem picture={picture} key={i} />
               </li>
      }
    });
    console.log(this.props);
    console.log(this.state);
    console.log("Gallery form pictures:")
    console.log(pictures)
    return (
      <div className='gallery-create'>
        <h1>{whichHeader}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="gallery-title">Gallery Title
            <input type="text"
              id='gallery-title'
              value={title}
              onChange={this.update('title')} />
          </label>
          <br/>
          <input type='submit'
            className='upload-button'
            value={whatButton}
            disabled={title.length < 2} />
        </form>
        <ul className="create-gallery-pics">
          {userPics}
        </ul>
      </div>
    )
  }
}

export default GalleryForm;