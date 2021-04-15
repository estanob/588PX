import React from 'react'
// import modal from '../modal/modal'
// import { Redirect } from 'react-router-dom'

class PictureForm extends React.Component{
  constructor(props) {
    super(props)

    let uploaderId = this.props.pictures ? this.props.pictures.uploader_id : '';
    let title = this.props.title ? this.props.title : '';
    let caption = this.props.caption ? this.props.caption : '';
    let location = this.props.location ? this.props.location : '';
    let photoFile = this.props.photoFile ? this.props.photoFile : '';

    this.state = {
      title: title,
      caption: caption,
      location: location,
      uploader_id: uploaderId,
      photoFile: photoFile,
      photoUrl: null
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
        location: this.props.location, 
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

  // if statement to check form type POST vs PUT/PATCH
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
    debugger
    let id = this.props.picture.id ? this.props.picture.id : '';
    let url = this.props.formType === 'Upload Picture' ? '/api/pictures' : `/api/pictures/${this.props.picture.id}`;
    let method = this.props.formType === 'Upload Picture' ? 'POST' : 'PATCH';
    $.ajax({
      id: id,
      url: url,
      method: method,
      data: picForm,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON);
      }
    )
  };
  
  render() {
    let whatButton = this.props.formType === 'Upload Picture' ? 'Upload' : 'Save Changes'
    
    return(
      <div className='picture'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="picture-title">Picture Title</label>
          <input type="text"
            id='picture-body'
            value={this.state.title}
            onChange={this.update('title')} />
          <br/>
          <label htmlFor="picture-location">Location</label>
          <input type="text"
            id='picture-location'
            value={this.state.location}
            onChange={this.update('location')} />
          <br/>
          <label htmlFor='picture-caption'>Caption (optional)</label>
          <input type="text"
            id='picture-caption'
            value={this.state.caption}
            onChange={this.update('caption')} />
          <br/>
          <input type='file'
            onChange={this.handleFile} 
            accept='image/*'/>
          <br/>
          <input type='submit'
            className='upload-button'
            value={whatButton}
            disabled={this.state.title.length < 1, this.state.location.length < 1} />
        </form>
      </div>
    )
  }
};

export default PictureForm;