import React from 'react'
import { withRouter } from 'react-router-dom';

class PictureForm extends React.Component{
  constructor(props) {
    super(props)

    let uploaderId = this.props.pictures ? this.props.pictures.uploader_id : '';
    let title = this.props.title ? this.props.title : '';
    let caption = this.props.caption ? this.props.caption : '';
    let position = this.props.picture.location ? this.props.picture.location : '';
    let photoFile = this.props.photoFile ? this.props.photoFile : '';

    this.state = {
      title: title,
      caption: caption,
      location: position,
      uploader_id: uploaderId,
      photoFile: photoFile,
      photoUrl: null,
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  componentDidUpdate(prevProps) {
    let uploaderId = this.props.pictures ? this.props.pictures.uploader_id : '';
    let photoFile = this.props.photoFile ? this.props.photoFile : '';
    if (prevProps.title !== this.props.title) {
      this.setState({ 
        title: this.props.title, 
        location: this.props.picture.location, 
        caption: this.props.caption, 
        photoFile: photoFile, 
        uploader_id: uploaderId })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  };

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({photoFile : file, photoUrl: fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  };

  handleSubmit(e) {
    e.preventDefault()
    const picForm = new FormData();
    picForm.append('picture[id]', this.props.picture.id)
    picForm.append('picture[title]', this.state.title)
    picForm.append('picture[location]', this.state.location)
    picForm.append('picture[caption]', this.state.caption)
    picForm.append('picture[uploader_id]', this.state.uploader_id)
    if (this.state.photoFile) {
      picForm.append('picture[photo]', this.state.photoFile)
    }
    let id = this.props.picture.id ? this.props.picture.id : '';
    let url = this.props.formType === 'Upload Picture' ? '/api/pictures' : `/api/pictures/${this.props.picture.id}`;
    let method = this.props.formType === 'Upload Picture' ? 'POST' : 'PATCH';
    debugger
    // need to create thunk action instead of ajax here
    $.ajax({
      id: id,
      url: url,
      method: method,
      data: picForm,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response),
      (response) => {
        console.log(response.responseJSON);
      }
    )
  };

  // titleError() {
  //   return (this.props.errors.map((err, i) => (
  //     err.includes('Title') ? <ul className='error' key={i}>{err}</ul> : ''
  //   )))
  // }
  
  // locationError() {
  //   return (this.props.errors.map((err, i) => (
  //     err.includes('Location') ? <ul className='error' key={i}>{err}</ul> : ''
  //   )))
  // }
  
  render() {
    const { formType } = this.props;
    const { title, location, caption } = this.state;
    let whatButton = formType === 'Upload Picture' ? 'Upload' : 'Save Changes';

    title ? title : '';
    location ? location : '';
    caption ? caption : '';

    console.log(location);

    debugger
    return(
      <div className='picture'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="picture-title">Picture Title
            <input type="text"
              id='picture-title'
              value={title}
              onChange={this.update('title')} />
          </label>
          {/* <div className='errors-box'>
            {this.titleError()}
          </div> */}
          <br/>
          <label htmlFor="picture-location">Location
            <input type="text"
              id='picture-location'
              value={location}
              onChange={this.update('location')} />
          </label>
          {/* <div className='errors-box'>
            {this.locationError()}
          </div> */}
          <br/>
          <label htmlFor='picture-caption'>Caption (optional)</label>
          <input type="text"
            id='picture-caption'
            value={caption}
            onChange={this.update('caption')} />
          <br/>
          {
            formType === 'Upload Picture' ? 
              <input 
                type='file'
                onChange={this.handleFile} 
                accept='image/*' /> : ''
          }
          <br/>
          <input type='submit'
            className='upload-button'
            value={whatButton}
            disabled={this.state.title.length < 2, this.state.location.length < 2} />
        </form>
      </div>
    )
  }
};

export default withRouter(PictureForm);