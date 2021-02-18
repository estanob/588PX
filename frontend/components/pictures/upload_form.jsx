import React from 'react';
import PictureIndexPhotos from './picture_index_photos';
import CreatePictureFormContainer from './create_picture_form_container';

class UploadForm extends React.Component {
  render() {
    return (
      <div>
        <CreatePictureFormContainer />
      </div>
    )
  }
};

export default UploadForm;