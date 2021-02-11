import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = state => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'login'
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('register'))}>
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);