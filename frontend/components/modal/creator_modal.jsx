import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CreatorModal (props) {
  let [whichContent, setWhichContent] = useState('');
  
  let {
    userName,
    owner,
    creator,
    users,
    showModal,
    closeModal,
    galleries,
    pics,
  } = props;
    
  if (!showModal) return null;
  owner = owner ? owner : {};
  creator = creator ? creator : {};
  users = users ? users : [];
  let modalPics = pics.map((pic, i) => {
    return (
      <li key={i} className="crt-mdl-pic-li">
        <Link to={`/pictures/${pic.id}`}>
          <img src={pic.photoUrl} alt={pic.title} />
        </Link>
      </li>
    )
  });
  let modalGals = galleries.map((gal, i) => {
    return (
      <li key={i} className='creator-gals-li'>
        <Link 
          to={`/galleries/${gal.id}`} 
          style={{ color: 'black', textDecoration: 'none' }}
          className='modal-gal-link'>
            <p>{gal.title}</p>
        </Link>
      </li>
    )
  })
  let modalFollowers = users.map((usr, i) => {
    if (owner.followers.includes(usr.id)) {
      return <li key={i} className="crt-mdl-follows-li">{usr.username}</li>
    }
  });
  let modalFollowing = users.map((usr, i) => {
    if (owner.followees.includes(usr.id)) {
      return <li key={i} className="crt-mdl-follows-li">{usr.username}</li>
    }
  });
  const modalContent = () => {
    if (whichContent === 'pics') {
      return (
        <ul className="crt-mdl-pics">
          {modalPics}
        </ul>
      )
    } else if (whichContent === 'gals') {
      return (
        <ul className="crt-mdl-gals">
          {modalGals}
        </ul>
      )
    } else if (whichContent === 'followers') {
      return (
        <ul className="crt-mdl-flrs">
          <h1>Followers:</h1>
          {owner.followers.length > 0 ? modalFollowers : <p>None</p>}
        </ul>
      )
    } else if (whichContent === 'following') {
      return (
        <ul className="crt-mdl-flrs">
          <h1>Following:</h1>
          {owner.followees.length > 0 ? modalFollowing : <p>None</p>}
        </ul>
      )
    } else {
      return ''
    }
  }

  let likes = owner ? owner.likes.length : 0;
  return (
    <div className="modal-background">
      <div className='crt-mdl'>
        <button className="modal-close" onClick={closeModal}>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M9.26782 7.98907L15.7505 1.50641C16.0873 1.15763 16.0825 
                    0.603223 15.7397 0.260349C15.3968 -0.0825247 14.8424 
                    -0.0873423 14.4936 0.249521L8.01093 6.73218L1.52828 
                    0.249521C1.1795 -0.0873423 0.625091 -0.0825247 0.282217 
                    0.260349C-0.0606571 0.603223 -0.0654748 1.15763 0.271389 
                    1.50641L6.75405 7.98907L0.271389 14.4717C0.0403167 14.6949 
                    -0.0523551 15.0254 0.0289918 15.3362C0.110339 15.647 0.353045 
                    15.8897 0.663826 15.971C0.974608 16.0524 1.3051 15.9597 
                    1.52828 15.7286L8.01093 9.24595L14.4936 15.7286C14.8424 
                    16.0655 15.3968 16.0607 15.7397 15.7178C16.0825 15.3749 
                    16.0873 14.8205 15.7505 14.4717L9.26782 7.98907Z" 
                fill="#222222">
              </path>
          </svg>
        </button>
        
        <div className="crt-mdl-content">
          <h1>
            {creator}
          </h1>
          <h3>
            {`${userName}'s Information and Posts:`}
          </h3>
          <h2>
            {`${likes} Photo Likes`}
          </h2>
          <div className='crt-mdl-follows'>
            <button className={whichContent === "followers" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('followers')}>
              {`${owner.followers.length} Followers`}&nbsp;
            </button>
            <button className={whichContent === "following" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('following')}>
              {`${owner.followees.length} Following`}
            </button>
            <button className={whichContent === "pics" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('pics')}>{`${owner.pics.length} Pictures`}</button>
            <button className={whichContent === "gals" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('gals')}>{`${owner.galleries.length} Galleries`}</button>
          </div>
          {modalContent()}
        </div>
      </div>
    </div>
  )
}
