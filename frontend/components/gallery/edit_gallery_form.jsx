import React from 'react';
import GalleryForm from './gallery_form';

class EditGalleryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  componentDidMount() {
    this.props.fetchGallery(this.props.match.params.id)
      .then(() => (
        this.setState({
          title: this.props.gallery.title,
        })
      ))
    this.props.fetchPictures()
    this.props.fetchPicturesToGalleries()
  }

  render() {
    debugger
    let { 
      formType, 
      gallery, 
      deleteGallery, 
      createPicturesToGallery,
      deletePicturesToGallery,
      fetchPicturesToGalleries,
      galleryImageModal,
      updateGallery,
      thisUser,
      pictures,
      fetchPictures,
    } = this.props;

    const {
      title,
    } = this.state;

    thisUser = thisUser ? thisUser : {};
    gallery = gallery ? gallery : {};
    pictures = pictures ? pictures : [];

    console.log("Edit Gallery Form pictures: ")
    console.log(pictures)
    console.log("Edit Gallery Props:")
    console.log(this.props)
    debugger
    return(
      <div className="edit-show">
        <div className='edit-header'>
          <h1 className='manager'>Gallery manager</h1>
        </div>
        <div className='edit-not-header'>
          <div className='edit-info'>
            <GalleryForm 
              gallery={gallery}
              id={gallery.id}
              title={title}
              updateGallery={updateGallery}
              pics={gallery.pics}
              thisUser={thisUser}
              formType={formType}
              pictures={pictures}
              galleryImageModal={galleryImageModal}
              fetchPictures={fetchPictures}
              fetchPicturesToGalleries={fetchPicturesToGalleries}
              createPicturesToGallery={createPicturesToGallery}
              deletePicturesToGallery={deletePicturesToGallery}
              deleteGallery={deleteGallery} />
          </div>
        </div>
      </div>
    )
  }
};

export default EditGalleryForm;