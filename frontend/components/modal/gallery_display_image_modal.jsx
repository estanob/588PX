import React from 'react';

const GalleryDisplayImageModal = props => {
  const { closeModal, pictures, galleries } = props;
  pictures ? pictures : [];
  galleries ? galleries : [];
  console.log("Gallery Modal Props")
  console.log(props)
  return (
    <div>
      <button className="modal-close" onClick={closeModal}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.26782 7.98907L15.7505 1.50641C16.0873 1.15763 16.0825 0.603223 15.7397 0.260349C15.3968 -0.0825247 14.8424 -0.0873423 14.4936 0.249521L8.01093 6.73218L1.52828 0.249521C1.1795 -0.0873423 0.625091 -0.0825247 0.282217 0.260349C-0.0606571 0.603223 -0.0654748 1.15763 0.271389 1.50641L6.75405 7.98907L0.271389 14.4717C0.0403167 14.6949 -0.0523551 15.0254 0.0289918 15.3362C0.110339 15.647 0.353045 15.8897 0.663826 15.971C0.974608 16.0524 1.3051 15.9597 1.52828 15.7286L8.01093 9.24595L14.4936 15.7286C14.8424 16.0655 15.3968 16.0607 15.7397 15.7178C16.0825 15.3749 16.0873 14.8205 15.7505 14.4717L9.26782 7.98907Z" fill="#222222"></path>
        </svg>
      </button>
      <h1>Display Image Test</h1>
    </div>
  )
}

export default GalleryDisplayImageModal;