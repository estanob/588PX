import React from 'react';
import { connect } from 'react-redux';

const mSTP = ({ errors, session }) => {
  return {
    errors: Object.values(errors.pictures),
    picture: {
      title: '',
      location: '',
      caption: '',
      gallery: '',
      uploader_id: session.id
    },
    formType: 'Upload Picture'
  }
}