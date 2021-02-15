import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.processForm({
      username: 'bobby555',
      password: '123456'
    })
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  };

  render() {
    return (
      <div className="login-form-container">
        <form className="login_form_div">
          <br />
          {this.renderErrors()}
          <div className="login_form">
            <h3>
              {this.props.formType === 'login' ? 'Log in to 588PX' : 'Join 588PX'}
            </h3>
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <button onClick={this.handleSubmit} className="session-submit">{this.props.formType === 'login' ? 'Login' : 'Register'}</button>
            {this.props.formType === 'login' ? <button 
              className='session-submit' 
              onClick={this.handleDemoLogin}
              value='demo'>Demo Login</button> : ""}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
// export default SessionForm;