import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, clearErrors, demoLogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'login'
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
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