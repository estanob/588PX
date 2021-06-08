import React from 'react'
import { Redirect, withRouter } from 'react-router-dom';

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
    };
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
      this.setState({photoFile : file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    };
  };

  handleSubmit(e) {
    e.preventDefault()
    const picForm = new FormData();
    picForm.append('picture[id]', this.props.picture.id);
    picForm.append('picture[title]', this.state.title);
    picForm.append('picture[location]', this.state.location);
    picForm.append('picture[caption]', this.state.caption);
    picForm.append('picture[uploader_id]', this.state.uploader_id);

    if (this.state.photoFile) {
      picForm.append('picture[photo]', this.state.photoFile)
    };

    this.props.action(picForm)
      .then(
        this.setState({
          title: '',
          caption: '',
          location: '',
          redirect: true,
        })
      )
      // .fail(
      //   this.titleError(),
      //   this.locationError()
      // )
  };

  // titleError() {
  //   return (this.props.errors.map((err, i) => (
  //     err.includes('Title') ? <ul className='error pic-err' key={i}>{err}</ul> : ''
  //     )))
  //   }
    
  // locationError() {
  //   return (this.props.errors.map((err, i) => (
  //     err.includes('Location') ? <ul className='error pic-err' key={i}>{err}</ul> : ''
  //     )))
  //   }
    
  render() {
    let { errors, formType } = this.props;
    const { title, location, caption } = this.state;
    let whatButton = formType === 'Upload Picture' ? 'Upload' : 'Save Changes';

    title ? title : '';
    location ? location : '';
    caption ? caption : '';
    errors = errors ? errors : [];
    const preview = this.state.photoUrl ? 
      <img 
        className='preview' 
        src={this.state.photoUrl} /> : null;
    
    const redirectToHomeFeed = this.state.redirect;

    if (redirectToHomeFeed) {
      return <Redirect to='/home' />
    }

    // console.log(errors)
    return (
      <div className='picture'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="picture-title">Picture Title
            <input type="text"
              id='picture-title'
              value={title}
              onClick={this.props.closeModal}
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
              onClick={this.props.closeModal}
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
            onClick={this.props.closeModal}
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
            disabled={
              title.length < 2, 
              location.length < 2
            } />
        </form>
        {this.state.photoUrl ? 
          <div className='picture-preview'>
            <h1>Your picture:</h1>
          </div> : ''
        }
        <br />
        {preview}
      </div>
    )
  }
};

export default withRouter(PictureForm);