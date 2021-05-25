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
  }

  render() {
    debugger
    let { 
      action, 
      formType, 
      gallery, 
      deleteGallery, 
      createPicturesToGallery,
      userPicIds,
      thisUser,
      pictures,
      fetchPictures,
    } = this.props;

    const {
      title,
    } = this.state;

    thisUser = thisUser ? thisUser : {};
    pictures = pictures ? pictures : [];

    console.log("Edit Gallery Form pictures: ")
    console.log(pictures)
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
              title={title}
              action={action}
              thisUser={thisUser}
              formType={formType}
              pictures={pictures}
              fetchPictures={fetchPictures}
              createPicturesToGallery={createPicturesToGallery}
              deleteGallery={deleteGallery} />
          </div>
        </div>
      </div>
    )
  }
};

export default EditGalleryForm;