import React from 'react';
import { Redirect } from 'react-router-dom';
import PictureIndexItem from '../pictures/picture_index_item';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    let title = this.props.title ? this.props.title : '';
    let creator_id = this.props.creator_id ? this.props.creator_id : '';
    this.state = {
      title: title,
      creator_id: creator_id,
      rerender: false,
      pics: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.props.fetchPictures();
  }

  componentDidUpdate(prevProps) {
    let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';
    if (prevProps.title !== this.props.title) {
      this.setState({
        title: this.props.title,
        creator_id: creatorId,
      })
    } else if (prevProps.pics !== this.props.pics) {
      this.setState({
        pics: this.props.pics
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
    galForm.append('gallery[title]', this.state.title);
    galForm.append('gallery[pics]', this.state.pics);
    this.props.action(galForm)
      .then(() => {
        this.state.pics.forEach(pic => {
          const gals = this.props.thisUser.galleries
          const galId = gals[gals.length - 1]
          const picGalForm = new FormData()
          picGalForm.append('pictures_to_gallery[picture_id]', pic.id)
          picGalForm.append('pictures_to_gallery[gallery_id]', galId)
          this.props.createPicturesToGallery(picGalForm)
        })
        console.log("成功喇！！！")
        this.setState({
          title: '',
          creator_id: '',
          rerender: true,
        })
      })
  };

  handleClick(e) {
    this.props.pictures ? this.props.pictures : [];
    console.log("Current Pictures")
    console.log(this.props.pictures)
    let picId = parseInt(e.currentTarget.id); //get id
    if (e.currentTarget.className === 'user-pics') {
      e.currentTarget.className = 'user-pics img-clicked'
      this.props.pictures.filter(picture => {
        if (picture.id === picId) this.state.pics.push(picture)
      })
    } else {
      e.currentTarget.className = 'user-pics'
      this.state.pics.splice(this.state.pics.indexOf(pic), 1);
    }
    console.log("New Pics! (this.state.pics)")
    console.log(this.state.pics)
  }
  
  render() {
    let { thisUser, formType, gallery, pictures } = this.props;
    gallery = gallery ? gallery : {};
    console.log("Current Gallery:")
    console.log(gallery)
    pictures = pictures ? pictures : {};
    const { title } = this.state;
    let whichHeader = formType === 'Create Gallery' ? 'Create a Gallery' : 'Edit Gallery';
    let whatButton = formType === 'Create Gallery' ? 'Create' : 'Save Changes';
    const redirectToGalleryIndex = this.state.redirect;
    if (redirectToGalleryIndex) return <Redirect to='/galleries' />
    thisUser.pics ? thisUser.pics : [];
    let userPics = pictures.map((picture, i) => {
      if (thisUser.pics.includes(picture.id)) {
        let whichClass = 'user-pics';
        gallery.pics.forEach(galPic => {
          if (galPic.id === picture.id) whichClass = 'user-pics img-clicked'
        })
        return (
          <li onClick={this.handleClick} 
            className={whichClass} 
            key={i} id={picture.id}>
              <img src={picture.photoUrl}
                alt={picture.title}
                id={picture.id} />
          </li>
        )
      }
    });
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