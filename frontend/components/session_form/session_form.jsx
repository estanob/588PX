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

//   demoUserSubmit(e) {
//     e.preventDefault()
//     const demoUser = {
//       username: 'jenny95611',
//       password: '123456'
//     }
//     this.props.processForm(demoUser)
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.processForm(this.state);
//   }

//   componentDidMount() {
//     this.props.clearErrors()
//   }

//   register() {
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

//     const LoginLink = (formType === 'register') ? this.login() : this.register()

//     const err = errors.map((error, i) => {
//       return <label key={i}> {error}</label>
//     })

//     const submitButton = (formType === 'register') ? 'Register' : 'Login'

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
//               {formType === 'login' ? 'Login to 588PX' : 'Join 588PX'}
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
//             {/* <div className='form_question'>
//               {LoginLink}
//             </div> */}
//           </form>
//         </div>
//       </>
//     )
//   }
// }
// export default SessionForm;





































import React from 'react';
import { withRouter } from 'react-router-dom';
import { demoLogin } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
  
  demoUserSubmit(e) {
    e.preventDefault()
    const demoUser = {
      username: 'bobby555',
      password: '123456'
    }
    this.props.processForm(demoUser)
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
    const demoLogIn = () => {
      this.props.demoLogin()
      this.props.closeModal()
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to 588PX!
          <br />
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
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
            <input className="session-submit" type="submit" value={this.props.formType} />
            {/* {(this.props.formType === 'login') ? <input className="session-submit" type="submit" value='demo'/> : null} */}
            {this.props.formType === 'login' && <button 
              className='demo' 
              onClick={() => demoLogIn()}
              value='demo'>Demo Login</button>}
            {/* {this.props.formType === 'login' && <input
              type="submit"
              onClick={this.props.demoUserSubmit}
              className="login-input"
              value='demo' />} */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);






































//   // demoUserSubmit(e) {
//   //   e.preventDefault()
//   //   const demoUser = {
//   //     username: 'demouser',
//   //     password: '123456'
//   //   }

//   //   this.props.processForm(demoUser)
//   // }