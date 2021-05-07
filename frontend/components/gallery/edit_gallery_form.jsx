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
  }

  render() {
    let { 
      action, 
      formType, 
      gallery, 
      deleteGallery, 
    } = this.props;

    const {
      title,
    } = this.state;

    gallery = gallery ? gallery : {};
    let creator_id = gallery ? gallery.creator_id : '';

    return(
      <div className="edit-show">
        <div className='edit-header'>
          <h1 className='manager'>Gallery manager</h1>
        </div>
        <div className='edit-not-header'>
          <div className='edit-info'>
            <GalleryForm 
              action={action}
              id={gallery.id}
              formType={formType}
              gallery={gallery}
              title={title}
              creator_id={creator_id}
              deleteGallery={deleteGallery} />
          </div>
        </div>
      </div>
    )
  }
};

export default EditGalleryForm;