import React from 'react';

class EditPictureForm extends React.Component {
  componentDidMount() {
    this.props.fetchPicture(this.props.match.params.pictureId)
  }

  render() {
    const { 
      action, 
      formType, 
      picture, 
      session, 
      deletePicture, 
      cancelModal, 
      closeModal
    } = this.props;

    if (!picture || picture.uploader_id !== session) return null;

    return(
      <div>
        <div>
          <PictureForm
            action={action}
            formType={formType}
            picture={picture}
            deletePicture={deletePicture}
            cancelModal={cancelModal}
            closeModal={closeModal} />
        </div>
      </div>
    )
  }
};

export default EditPictureForm;