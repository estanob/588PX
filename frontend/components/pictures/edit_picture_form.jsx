import React from 'react';

class EditPictureForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPicture()
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

    // if (!picture || picture.uploader_id !== session) return null;
    if (!picture) return "Picture does not exist";

    debugger
    return(
      <>
        <div className="edit-show">
          <div>Hello World</div>
          <img src={picture.photoUrl} alt={picture.title}/>
        </div>
        <div>
          {formType}
        </div>
        {/* <div className="show img-info">
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
      </>
    )
  }
};

export default EditPictureForm;