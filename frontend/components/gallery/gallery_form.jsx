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
      rerender: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.picIds = [];
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
    const galForm = new FormData();
    galForm.append('gallery[id]', this.props.gallery.id);
    galForm.append('gallery[title]', this.state.title);
    galForm.append('gallery[creator_id]', this.state.creator_id);
    galForm.append('gallery[pictures_to_gallery', this.state.pictures_to_gallery);

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
    debugger
  };

  handleClick(e) {
    e.preventDefault();
    
    const id = parseInt(e.target.alt);
    const idObject = { picId: id };

    if (this.picIds[id]) {
      delete this.picIds[id];
    } else {
      this.picIds[id] = idObject;
    }
    console.log(this.picIds);

    const clicked = e.currentTarget.className;
    if (clicked === "user-pics") {
      e.currentTarget.className = 'user-pics img-clicked';
    } else {
      e.currentTarget.className = "user-pics";
    }

    this.setState({
      rerender: !this.state.render,
    })
  };
  
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
                    alt={picture.title} />
               </li>
      }
    });
    console.log(this.props);
    console.log(this.state);
    console.log("This User:")
    console.log(thisUser)
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