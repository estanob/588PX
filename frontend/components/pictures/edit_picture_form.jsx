import React from 'react';
import PictureForm from './picture_form';

class EditPictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location: '',
      caption: '',
    }
  }

  componentDidMount() {
    this.props.fetchPicture(this.props.match.params.id)
      .then(() => (
        this.setState({
          title: this.props.picture.title,
          location: this.props.picture.location,
          caption: this.props.picture.caption,
        })
      ))
  }

  render() {
    const { 
      action, 
      formType, 
      picture, 
      deletePicture, 
    } = this.props;

    const {
      title,
      location,
      caption,
    } = this.state;

    let photoFile = picture ? picture.photoFile : '';
    let uploader_id = picture ? picture.uploader_id : '';

    console.log(picture);
    console.log(photoFile);
    console.log(uploader_id);
    return(
      <div>

        <PictureForm 
          action={action}
          formType={formType}
          picture={picture}
          title={title}
          location={location}
          caption={caption}
          photoFile={photoFile}
          uploader_id={uploader_id}
          deletePicture={deletePicture} />
      </div>
    )
  }
};

export default EditPictureForm;