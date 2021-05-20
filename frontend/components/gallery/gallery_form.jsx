import React from 'react';
import { Redirect } from 'react-router-dom';
import PictureIndexItem from '../pictures/picture_index_item';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    // let title = this.props.title ? this.props.title : '';
    // let creatorId = this.props.galleries ? this.props.galleries.creator_id : '';

    this.state = {
      title: '',
      // title: title,
      // creator_id: creatorId,
      rerender: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.picIds = [];
    this.picsToGals = [];
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

    if (this.picIds.length === 0) {
      const err = "Please select at least 1 picture"
      if (!this.props.errors.includes(err)) this.props.errors.push(err)
      this.setState({
        rerender: !this.state.rerender,
      })
      return null;
    }
    
    const galForm = new FormData();
    galForm.append('gallery[id]', this.props.gallery.id);
    galForm.append('gallery[title]', this.state.title);
    galForm.append('gallery[creator_id]', this.state.creator_id);
    galForm.append('gallery[pics]', this.state.picIds)
    galForm.append('gallery[pictures_to_gallery]', this.state.pictures_to_gallery);

    // const newGal = {
    //   title: this.state.title,
    //   creator_id: this.props.session,
    //   pics: this.picIds,
    //   pictures_to_galleries: [],
    // }
    this.props.action(galForm)
    // this.props.action(newGal)
      // .then((galForm) => {
      // .then((newGal) => {
      //   let testIng = this.picIds.forEach(picId => {
      //     picId["galleryId"] = newGal.id;
      //   })
      //   this.props.createPicturesToGallery(this.picIds)
      //   console.log("Testing:")
      //   console.log(testIng);
      // })
    console.log("Gallery Form");
    console.log(galForm)
    if (galForm) {
      this.props.action(galForm)
        .then(
          this.setState({
            title: '',
            redirect: true,
          }),
          galForm.append('gallery[pictures_to_gallery]', this.picsToGals)
        );
    }

    // console.log("New Gallery:")
    // console.log(newGal);
    debugger
  };

  handleClick(e) {
    e.preventDefault();
    
    const id = e.target.id;

    if (this.picIds.includes(id)) {
      let deleted = this.picIds.filter(function(value, index, arr) {
        return value !== id
      });
      this.picIds = deleted;
    } else {
      this.picIds.push(id);
    }

    console.log("ID");
    console.log(id);
    console.log("This Pic IDs");
    console.log(this.picIds);

    const clicked = e.currentTarget.className;
    if (clicked === "user-pics") {
      e.currentTarget.className = 'user-pics img-clicked';
    } else {
      e.currentTarget.className = "user-pics";
    }
    // this.setState({
    //   rerender: !this.state.render,
    // })
  };
  
  // handlePicsToGals(e) {
  //   e.preventDefault()
  //   const picGalForm = new FormData();
    // picGalForm.append('pictures_to_gallery[]', );
    // picGalForm.append('pictures_to_gallery[]', );
  //   this.props.createPicturesToGallery(picGalForm)
  // }
  
  render() {
    let { thisUser, formType, gallery, pictures } = this.props;
    gallery = gallery ? gallery : {};
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
                  key={i}>
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