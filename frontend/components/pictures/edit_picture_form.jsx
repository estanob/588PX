import React from 'react';
import PictureForm from './picture_form';

class EditPictureForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchPicture(this.props.match.params.pictureId)
  }

  render() {
    const { 
      action, 
      formType, 
      picture, 
      deletePicture, 
    } = this.props;

    // if (!picture || picture.uploader_id !== session) return null;
    // if (!picture) return "Picture does not exist";
    if (!picture) return null;

    debugger
    return(
      <>
        {/* <div className="edit-show">
          <div>Hello World</div>
          <img src={picture.photoUrl} alt={picture.title}/>
          {picture.location}
        </div>
        <div>
          {formType}
        </div>
        <div className="show img-info">
          <div>
            <PictureForm
              action={action}
              formType={formType}
              picture={picture}
              deletePicture={deletePicture}
              cancelModal={cancelModal}
              closeModal={closeModal} />
          </div>
        </div> */}

        <PictureForm 
          action={action}
          formType={formType}
          picture={picture}
          deletePicture={deletePicture}
          uploader_id={picture.uploader_id} />
      </>
    )
  }
};

export default EditPictureForm;