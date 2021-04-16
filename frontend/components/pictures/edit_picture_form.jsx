import React from 'react';
import { Link } from 'react-router-dom';
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
          photoUrl: this.props.picture.photoUrl
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
      photoUrl,
      location,
      caption,
    } = this.state;

    picture ? picture : '';
    let photoFile = picture ? picture.photoFile : '';
    let uploader_id = picture ? picture.uploader_id : '';

    console.log("You have reached the edit page!")

    debugger
    return(
      <div className="edit-show">
        <h1 className='manager'>Picture manager</h1>
        <div className='edit-not-header'>
          <Link to={`/pictures/${picture.id}`}>
            <img className='edit' src={photoUrl} alt={title} />
          </Link>
          <div className='edit-info'>
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
        </div>
      </div>
    )
  }
};

export default EditPictureForm;