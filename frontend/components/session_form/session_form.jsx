// import React from 'react';
// import { Link } from 'react-router-dom'

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: '',
//       password: ''
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.demoUserSubmit = this.demoUserSubmit.bind(this)
//   }

//   update(field) {
//     return e => {
//       this.setState({ [field]: e.target.value })
//     }
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.processForm(this.state);
//   }

//   demoUserSubmit(e) {
//     e.preventDefault()
//     const demoUser = {
//       username: 'johnny555',
//       password: '123456'
//     }
//     this.props.professForm(demoUser)
//   }

//   componentDidMount() {
//     this.props.clearErrors()
//   }

//   signUp() {
//     return (
//       <div>
//         <p>Don't have an account? <Link to='/register'>Register</Link></p>
//       </div>
//     )
//   }

//   login() {
//     return (
//       <div>
//         <p>Already have an account? <Link to='/login'>Log In</Link></p>
//       </div>
//     )
//   }

//   usernameError() {
//     return (this.props.errors.map((error, i) => (
//       error.includes('Username') ? <ul className="error" key={i}>{error}</ul> : ''
//     )))
//   }

//   passwordError() {
//     return (this.props.errors.map((error, i) => (
//       error.includes('Password') ? <ul className="error" key={i}>{error}</ul> : ''
//     )))
//   }

//   render() {
//     const { formType, errors } = this.props

//     const LoginLink = (formType === 'register') ? this.login() : this.signUp()

//     const err = errors.map((error, i) => {
//       return <label key={i}> {error}</label>
//     })

//     const submitButton = (formType === 'register') ? 'Register' : 'Log in'

//     return (
//       <>


//         <div className="login_form_div">
//           {formType === 'login' && err.length > 0 &&
//             <div onClick={this.props.closeModal} className="modal-errors">
//               {err}
//             </div>
//           }

//           <form onSubmit={this.handleSubmit} className="login_form">
//             <h3>
//               {formType === 'login' ? 'Log in to 588Px' : 'Join 588Px'}
//             </h3>
//             <br />
//             <br />
//             <label>Username:
//               <br />
//               <input
//                 type="text"
//                 onChange={this.update('username')}
//                 value={this.state.username} />
//             </label>
//             <div className='errors-box'>{this.usernameError()}</div>
//             <br /><br />
//             <label>Password:
//               <br />
//               <input
//                 type="password"
//                 onChange={this.update('password')}
//                 value={this.state.password} />
//             </label>
//             <div className='errors-box'>{this.passwordError()}</div>
//             <br /><br />
//             <input
//               type="submit"
//               className="login_button"
//               value={submitButton} />
//             <br />
//             {formType === 'login' && <input
//               type="submit"
//               onClick={this.demoUserSubmit}
//               className="login_button"
//               value='Demo User Login' />}
//             <br />
//             <div className='form_question'>
//               {LoginLink}
//             </div>
//           </form>
//         </div>
//       </>
//     )
//   }
// }
// export default SessionForm;




































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
    // this.demoUserSubmit = this.demoUserSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }
  
  // demoUserSubmit(e) {
  //   e.preventDefault()
  //   const demoUser = {
  //     username: 'bobby555',
  //     password: '123456'
  //   }
  //   this.props.processForm(demoUser)
  // }

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
    // const demoUserLogin = () => {
    //   this.props.demoLogin()
    //   this.props.closeModal()
    // }
    
    // const exitModal = () => {
    //   this.props.clearErrors()
    //   this.props.closeModal()
    // }

    return (
      <div className="login-form-container">
        <form className="login-form-box">
          Welcome to 588PX!
          <br />
          {this.renderErrors()}
          <div className="login-form">
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
            <button onClick={this.handleSubmit} className="session-submit">{this.props.formType}</button>
            {this.props.formType === 'login' ? <button 
              className='demo' 
              onClick={this.handleDemoLogin}
              // onClick={this.demoUserSubmit}
              value='demo'>Demo Login</button>: ""}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
// export default SessionForm;