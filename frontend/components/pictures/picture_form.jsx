import React from 'react'
import modal from '../modal/modal'
import { Redirect } from 'react-router-dom'

class PictureForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      caption: "",
      location: "",
      uploader_id: this.props.uploader_id,
      photoFile: null,
      photoUrl: null
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInput(e) {
    this.setState({title: e.currentTarget.value})
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
    const formData = new formData()
    formData.append('picture[title]', this.state.title)
    if (this.state.photoFile) {
      formData.append('picture[photo]', this.state.photoFile)
    }
    $.ajax({
      url: '/api/pictures',
      method: 'POST',
      data: formData,
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
    return(
      <div className='picture-body'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="picture-body">Picture Title</label>
          <input type="text"
            id='picture-body'
            value={this.state.title}
            onChange={this.handleInput} />
          <br/>
          <label htmlFor="picture-location">Location</label>
          <input type="text"
            id='picture-location'
            value={this.state.location}
            onChange={this.handleInput} />
          <br/>
          <label htmlFor='picture-caption'>Caption (optional)</label>
          <input type="text"
            id='picture-caption'
            value={this.state.caption}
            onChange={this.handleInput} />
          <br/>
          <input type='file'
            onChange={this.handleFile} />
          <br/>
          <button>Upload new picture!</button>
        </form>
      </div>
    )
  }
};

export default PictureForm;