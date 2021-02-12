import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { clearErrors, demoLogin, login } from '../../actions/session_actions';

const mSTP = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'login'
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    // demoUserlogin: demoUser => dispatch(demoLogin(demoUser)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('register'))}>
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);