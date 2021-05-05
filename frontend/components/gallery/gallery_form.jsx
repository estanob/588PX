import React from 'react';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props)

    let title = this.props.title ? this.props.title : '';

    this.state = {
      title: title,
    };
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault()
    const galForm = new FormData();
    galForm.append('gallery[id]', this.props.gallery.id);
    galForm.append('gallery[title]', this.state.title);
    galForm.append('gallery[creator_id]', this.state.creator_id);

    this.props.action(galForm)
      .then(
        this.setState({
          title: '',
          redirect: true,
        })
      );
  };
  
  render() {
    const { formType } = this.props;
    const { title } = this.state;
    let whatButton = formType === 'Create Gallery' ? 'Create' : 'Save Changes';
    // console.log(formType);
    // console.log(title);
    console.log(this.props);
    console.log(this.state);
    debugger
    return (
      <div className='gallery-create'>
        <h1>Create a Gallery</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="gallery-title">Gallery Title
            <input type="text"
              id='gallery-title'
              value={title}
              onChange={this.update('title')} />
          </label>
          <br/>
          <input type='submit'
            className='upload-button'
            value={whatButton}
            disabled={title.length < 2} />
        </form>
      </div>
    )
  }
}

export default GalleryForm;