import React from 'react';
import { Redirect } from 'react-router-dom';
import PictureIndexItem from '../pictures/picture_index_item';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    // let title = this.props.title ? this.props.title : '';
    // let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';

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

    // this.picIds = [];
    // this.picsToGals = [];
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

    // if (this.picIds.length === 0) {
    //   const err = "Please select at least 1 picture"
    //   if (!this.props.errors.includes(err)) this.props.errors.push(err)
    //   this.setState({
    //     rerender: !this.state.rerender,
    //   })
    //   return null;
    // }

    const galForm = new FormData();
    // galForm.append('gallery[id]', this.props.gallery.id);
    galForm.append('gallery[title]', this.state.title);
    galForm.append('gallery[pics]', this.state.pics);
    this.props.action(galForm)
      .then(() => {
        this.state.pics.forEach(pic => {
          debugger
          let galId = this.props.thisUser.galleries[this.props.thisUser.galleries.length - 1]
          console.log("Gallery Id")
          console.log(galId)
          this.props.createPicturesToGallery({
            picture_id: pic.id,
            gallery_id: galId,
          })
        })
        console.log("成功喇！！！")
        this.setState({
          title: '',
          creator_id: '',
        })
        console.log("Hit the debugger then print:")
        console.log(this.state)
        console.log(this.props)
      })
    // if (galForm) {
    //   this.props.action(galForm)
    //     .then(
    //       console.log("Gallery Form"),
    //       console.log(galForm),
    //       this.picsToGals = this.picIds.forEach(picId => {
    //         this.props.createPicturesToGallery({
    //           picture_id: picId,
    //           gallery_id: this.props.gallery.id
    //         })
    //       }),
    //       console.log("Pics to Gals"),
    //       console.log(this.picsToGals),
    //       this.setState({
    //         title: '',
    //         redirect: true,
    //       }),
    //     );
    // }
    
    // const galPics = Object.values(this.state.pics)
    
    // const newGal = {
    //   title: this.state.title,
    // }
    // let picsToGals = [];
    // this.props.action(galForm)
      // .then(gallery => {
      //   console.log("New Gallery")
      //   console.log(galForm)
      //   console.log(gallery)
      //   gallery.pics.forEach(galPic => {
      //     let picToGal = { gallery_id: gallery.id, picture_id: galPic.id };
      //     // galPic["picture_id"] = gallery.id;
      //     picsToGals.push(picToGal)
      //     console.log("Pics To Gals")
      //     console.log(picsToGals)
      //   })
      //   picsToGals.forEach(picToGal => {
      //     this.props.createPicturesToGallery(picToGal)
      //   })
      //     .then(console.log("You've created it!"))
      //   // this.props.createPicturesToGallery(galPics)
      //   //   .then(() => console.log("Success!"))
      // })
    
    // this.props.gallery.pics.forEach(pic => {
    //   this.props.createPicturesToGallery({
    //     gallery_id: this.props.gallery.id,
    //     picture_id: pic.id,
    //   })
    // })
    //   .then(() => console.log("success!"))
      
    debugger
  };

  //   const clicked = e.currentTarget.className;
  //   if (clicked === "user-pics") {
  //     e.currentTarget.className = 'user-pics img-clicked';
  //     // this.props.createPicturesToGallery()
  //   } else {
  //     e.currentTarget.className = "user-pics";
  //   }
  //   // this.setState({
  //   //   rerender: !this.state.render,
  //   // })
  // };

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
    debugger
  }
  
  // handlePicsToGals(e) {
  //   e.preventDefault()
  //   const picGalForm = new FormData();
    // picGalForm.append('pictures_to_gallery[]', );
    // picGalForm.append('pictures_to_gallery[]', );
  //   this.props.createPicturesToGallery(picGalForm)
  // }
  
  render() {
    debugger
    let { thisUser, formType, gallery, pictures } = this.props;
    gallery = gallery ? gallery : {};
    pictures = pictures ? pictures : {};
    const { title } = this.state;
    let whichHeader = formType === 'Create Gallery' ? 'Create a Gallery' : 'Edit Gallery';
    let whatButton = formType === 'Create Gallery' ? 'Create' : 'Save Changes';
    const redirectToHomeFeed = this.state.redirect;
    if (redirectToHomeFeed) return <Redirect to='/galleries' />
    thisUser.pics ? thisUser.pics : [];
    let userPics = pictures.map((picture, i) => {
      if (thisUser.pics.includes(picture.id)) {
        return <li onClick={this.handleClick} 
                  className='user-pics' 
                  key={i} id={picture.id}>
                  <img src={picture.photoUrl}
                    alt={picture.title}
                    id={picture.id} />
               </li>
      }
    });
    console.log("This Props");
    console.log(this.props);
    console.log("This State");
    console.log(this.state);
    console.log("This User:")
    console.log(thisUser)
    console.log("Gallery form pictures:")
    console.log(pictures)
    console.log("Render picIds")
    console.log(this.picIds)
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