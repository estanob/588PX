import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name:'',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoLogin(e) {
    e.preventDefault()
    this.props.demoLogin();
  }

  signUp() {
    return (
      <div>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
    )
  }

  login() {
    return (
      <div>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
      </div>
    )
  }

  firstNameError() {
    return (this.props.errors.map((error, i) => (
      error.includes('First name') ? <ul className='error' key={i}>{error}</ul> : ''
    )))
  }

  lastNameError() {
    return (this.props.errors.map((error, i) => (
      error.includes('Last name') ? <ul className='error' key={i}>{error}</ul> : ''
    )))
  }
//
  usernameError() {
    return (this.props.errors.map((error, i) => (
      error.includes('Username') ? <ul className='error' key={i}>{error}</ul> : ''
    )))
  }

  passwordError() {
    return (this.props.errors.map((error, i) => (
      error.includes('Password') ? <ul className='error' key={i}>{error}</ul> : ''
    )))
  }

  render() {
    const LoginLink = (this.props.formType === 'signup') ? this.login() : this.signUp()
    const err = this.props.errors.map((error, i) => {
      return <label key={i}>{error}</label>
    })
    
    return (
      <div className="login-form-container">
        <form className="login_form_div">
          {this.props.formType === 'login' && err.length > 0 &&
            <div className="modal-errors" onClick={this.props.closeModal}>
              {err}
            </div>
          }
          <div className="login_form" onClick={this.props.closeModal}>
            <h3>
              {this.props.formType === 'login' ? 'Log in to 588PX' : 'Join 588PX'}
            </h3>
            <br />
            {this.props.formType !== 'login' ? 
              <>
                <label>First Name:
                  <input type="text"
                    onClick={this.props.closeModal}
                    value={this.state.firstName}
                    onChange={this.update('first_name')}
                    className={'login-input'} />
                </label>
                <div className='errors-box'>
                  {this.firstNameError()}
                </div>
                <br/>
                <label>Last Name:
                  <input type="text"
                    onClick={this.props.closeModal}
                    value={this.state.LastName}
                    onChange={this.update('last_name')}
                    className={'login-input'} />
                </label>
                <div className='errors-box'>
                  {this.lastNameError()}
                </div>
                <br/>
              </> : ''}
            <label>Username:
              <input type="text"
                onClick={this.props.closeModal}
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input" />
            </label>
            <div className='errors-box'>
              {this.usernameError()}
            </div>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input" />
            </label>
            <div className='errors-box'>{this.passwordError()}</div>
            <br />
            <button 
              onClick={this.handleSubmit} 
              className="session-submit" >
              {this.props.formType === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <br/>
            {
              this.props.formType === 'signup' ? 
              <button 
                className='session-submit' 
                onClick={this.handleDemoLogin}
                value='demo' >
                Demo Login
              </button> : ""
            }
            <br/>
            <div className='form_question'>
              {LoginLink}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);