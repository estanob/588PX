import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from '../modal/modal';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    let title = this.props.title ? this.props.title : '';
    let creator_id = this.props.creator_id ? this.props.creator_id : '';
    let pics = this.props.gallery ? this.props.gallery.pics : [];
    this.state = {
      title: title,
      creator_id: creator_id,
      redirect: false,
      pics: pics,
    };

    this.picsToAdd = [];
    this.picsToRemove = [];

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.props.fetchPictures();
    if (this.props.formType === 'Edit Gallery') this.props.fetchPicturesToGalleries();
  }

  componentDidUpdate(prevProps) {
    const { gallery, title, pics } = prevProps;
    gallery ? gallery : {};
    title ? title : '';
    pics ? pics : [];
    debugger
    console.log("prevProps:")        
    console.log(prevProps)          
    let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';
    if (title !== this.props.title) {
      this.setState({
        title: this.props.title,
        creator_id: creatorId,
        pics: pics,
      })
    } 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    debugger
    e.preventDefault()

    const galForm = new FormData();
    galForm.append('gallery[title]', this.state.title);
    if (this.props.formType === 'Edit Gallery') {
      galForm.set('gallery[pics]', this.state.pics);
    } else {
      galForm.append('gallery[pics]', this.state.pics);
    }

    console.log("Pics to Add")
    console.log(this.picsToAdd)
    if (this.props.formType === 'Edit Gallery') {
      this.picsToAdd ? this.picsToAdd : [];
      this.picsToRemove ? this.picsToRemove : [];
      this.props.gallery ? this.props.gallery.picsToGal : [];
      console.log("Pics to Gallery")
      console.log(this.props.gallery.picsToGal)
      console.log("Removing the pics")
      console.log(this.picsToRemove)
      if (this.picsToRemove.length > 0) {
        debugger
        this.picsToRemove.forEach(pic => {
          this.props.gallery.picsToGal.forEach(pTG => {
            if (pic.id === pTG.picture_id) {
              debugger
              this.props.deletePicturesToGallery(pTG)
            }
          })
        })
      } else if (this.picsToAdd.length > 0) {
        this.picsToAdd.forEach(pic => {
          debugger
          const gals = this.props.thisUser.galleries
          const galId = gals[gals.length - 1]
          const picGalForm = new FormData()
          picGalForm.append('pictures_to_gallery[picture_id]', pic.id)
          picGalForm.append('pictures_to_gallery[gallery_id]', galId)
          this.props.createPicturesToGallery(picGalForm)
          console.log("Picture Id:")
          console.log(pic.id)
          console.log("Gallery Id:")
          console.log(galId)
        })
        console.log("Success!")
      }
      this.props.updateGallery(galForm)
        .then(
          this.setState({
            title: '',
            creator_id: '',
            pics: this.state.pics,
            redirect: true,
          })
        )
    } else {
      this.props.createGallery(galForm)
        .then(() => {
          this.picsToAdd.forEach(pic => {
            debugger
            const gals = this.props.thisUser.galleries ? this.props.thisUser.galleries : {};
            const galId = gals[gals.length - 1]
            const picGalForm = new FormData()
            picGalForm.set('pictures_to_gallery[picture_id]', pic.id)
            picGalForm.set('pictures_to_gallery[gallery_id]', galId)
            this.props.createPicturesToGallery(picGalForm)
              .then (
                console.log("Picture Id:"),
                console.log(pic.id),
                this.setState({
                  title: '',
                  creator_id: '',
                  pics: this.picsToAdd,
                  redirect: true,
                }),
                console.log("成功喇！！！"),
              )
          })
      })
    }
    debugger
  };

  handleClick(e) {
    debugger
    this.props.pictures ? this.props.pictures : [];
    const currentGallery = this.props.gallery ? this.props.gallery : {};
    console.log("Pics to Add")
    console.log(this.picsToAdd)
    let picId = parseInt(e.currentTarget.id);
    if (e.currentTarget.className === 'user-pics') {
      e.currentTarget.className = 'user-pics img-clicked'
      this.props.pictures.filter(picture => {
        if (picture.id === picId) this.picsToAdd.push(picture)
        console.log("filtered:")
        console.log(this.picsToAdd)
      })
    } else {
      debugger
      console.log("Current Gallery")
      console.log(this.props.gallery)
      e.currentTarget.className = 'user-pics'
      this.picsToAdd = this.picsToAdd.filter(picture => picture.id !== picId)
      console.log("Filtered pics in the gallery")
      console.log(this.picsToAdd)
      let removedPic = currentGallery.picsToGal.filter(pTG => pTG.picture_id === picId)
      this.picsToRemove.push(removedPic);
      console.log("Pics to Remove")
      console.log(this.picsToRemove)
    }
    debugger
  }
  
  render() {
    debugger
    let { thisUser, formType, gallery, pictures, galleryImageModal } = this.props;
    thisUser = thisUser ? thisUser : {};
    gallery = gallery ? gallery : {};
    galleryImageModal = galleryImageModal ? galleryImageModal : {};
    gallery.pics ? gallery.pics : {};
    console.log("Current Gallery:")
    console.log(gallery)
    const { title } = this.state;
    let whichHeader = formType === 'Create Gallery' ? 'Create a New Gallery' : 'Edit Gallery';
    let whatButton = formType === 'Create Gallery' ? 'Create' : 'Save Changes';
    const redirectToGalleryIndex = this.state.redirect;
    if (redirectToGalleryIndex) return <Redirect to='/galleries' />
    thisUser.pics ? thisUser.pics : [];
    const userPics = pictures.map((picture, i) => {
      if (thisUser.pics.includes(picture.id)) {
        debugger
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
    console.log("This State:")
    console.log(this.state)
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
        {galleryImageModal}
        <ul className="create-gallery-pics">
          {userPics}
        </ul>
      </div>
    )
  }
}

export default GalleryForm;