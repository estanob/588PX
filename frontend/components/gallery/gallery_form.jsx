import React from 'react';
import { Redirect } from 'react-router-dom';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    let title = this.props.title ? this.props.title : '';
    let description = this.props.description ? this.props.description : '';
    let creator_id = this.props.creator_id ? this.props.creator_id : this.props.session;
    this.state = {
      title: title,
      description: description,
      creator_id: creator_id,
    };

    this.picIds = {};
    this.picsToAdd = [];
    this.picsToRemove = [];
    this.redirect = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.props.fetchPictures();
    this.props.fetchGalleries();
    this.props.fetchPicturesToGalleries();
  }

  componentDidUpdate(prevProps) {
    const { gallery, title, pics } = prevProps;
    gallery ? gallery : {};
    title ? title : '';
    pics ? pics : [];
    let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';
    if (title !== this.props.title) {
      this.setState({
        title: this.props.title,
        creator_id: creatorId,
        pics: pics,
      })
    } 
  }

  componentWillUnmount() {
    this.setState = (state, cb) => {
      return;
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
    galForm.append('gallery[description]', this.state.description);
    galForm.append('gallery[creator_id]', this.props.session);


    if (this.picsToAdd.length > 0) {
      this.props.createGallery(galForm)
        .then(gallery => {
          const gals = this.props.galleries ? this.props.galleries : [];
          let lastGal = gals[gals.length - 1]
          this.picsToAdd.forEach(pic => {
            const picGalForm = new FormData()
            picGalForm.append('pictures_to_gallery[picture_id]', pic.id)
            picGalForm.append('pictures_to_gallery[gallery_id]', lastGal.id)
            this.props.createPicturesToGallery(picGalForm)
              .then (
                this.setState({
                  title: '',
                  creator_id: '',
                  pics: [],
                }),
                this.redirect = true,
              )
          })
        })
    }
  };

  handleClick(e) {
    this.props.pictures ? this.props.pictures : [];
    const currentGallery = this.props.gallery ? this.props.gallery : {};
    let picId = parseInt(e.currentTarget.id);
    if (e.currentTarget.className === 'user-pics') {
      e.currentTarget.className = 'user-pics img-clicked'
      this.props.pictures.filter(picture => {
        if (picture.id === picId) this.picsToAdd.push(picture)
      })
    } else {
      e.currentTarget.className = 'user-pics'
      this.picsToAdd = this.picsToAdd.filter(picture => picture.id !== picId)
      let removedPic = currentGallery.picsToGal.filter(pTG => pTG.picture_id === picId)
      this.picsToRemove.push(removedPic);
    }
  }

  titleError() {
    return (
      this.props.errors.map((error, i) => (
        error.includes('Title') ? <ul className='error gal-err' key={i}>{error}</ul> : ''
      ))
    )
  }

  descriptionError() {
    return (
      this.props.errors.map((error, i) => (
        error.includes('Description') ? <ul className='error gal-err' key={i}>{error}</ul> : ''
      ))
    )
  }
  
  render() {
    let { thisUser, formType, gallery, pictures, galleries } = this.props;
    const { title, description } = this.state;
    thisUser = thisUser ? thisUser : {};
    galleries = galleries ? galleries : [];
    let lastGal = galleries[galleries.length - 1];
    gallery = gallery ? gallery : {};
    gallery.pics ? gallery.pics : {};
    let whichHeader = formType === 'Create Gallery' ? 'Create a New Gallery' : 'Edit Gallery';
    let whatButton = formType === 'Create Gallery' ? 'Create' : 'Save Changes';
    const redirectToGalleryIndex = this.redirect;
    if (redirectToGalleryIndex) return <Redirect to='/galleries' />
    thisUser.pics ? thisUser.pics : [];
    const userPics = pictures.map((picture, i) => {
      if (thisUser.pics.includes(picture.id)) {
        let whichClass = 'user-pics';
        if(gallery.title !== "") {
          gallery.pics.forEach(galPic => {
            if (galPic.id === picture.id) whichClass = 'user-pics img-clicked'
          })
        }
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
        <form onSubmit={this.handleSubmit} className="gal-form">
          <label htmlFor="gallery-title">Title</label>
          <br/>
            <input type="text"
              id='gallery-title'
              value={title}
              onChange={this.update('title')} />
          <div className="gal-err-box">
            {this.titleError()}
          </div>
          <br/>
          <label htmlFor="gallery-description">Description (optional)</label>
          <br/>
            <textarea type="text"
              id='gallery-description'
              value={description}
              onChange={this.update('description')} />
          <div className="gal-err-box">
            {this.descriptionError()}
          </div>
          <br/>
          <input type='submit'
            className='upload-button'
            value={whatButton} />
        </form>
        <div className='gallery-form-pics'>
          <ul className="create-gallery-pics">
            {userPics}
          </ul>
        </div>
      </div>
    )
  }
}

export default GalleryForm;