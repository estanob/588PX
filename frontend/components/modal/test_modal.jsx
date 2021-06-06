import React, { useState } from 'react'

export default function TestModal (props) {
  let [whichContent, setWhichContent] = useState('');
  console.log("Which Content?")
  console.log(whichContent)
  let { 
    userName, 
    owner,
    creator, 
    users,
    showModal, 
    closeModal, 
    galleries, 
    pics } = props;
  if (!showModal) return null;
  console.log("Test Modal's Props")
  console.log(props)
  users = users ? users : [];
  let modalPics = pics.map((pic, i) => {
    return (
      <li key={i} className="crt-mdl-pic-li">
        <img src={pic.photoUrl} alt={pic.title} />
      </li>
    )
  });
  let modalGals = [];
  let modalFollowers = users.map((usr, i) => {
    if (owner.followers.includes(usr.id)) {
      return <li key={i} className="crt-mdl-follows-li">{usr.username}</li>
    }
  });
  let modalFollowing = users.map((usr, i) => {
    if (owner.followees.includes(usr.id)) {
      return <li className="crt-mdl-follows-li">{usr.username}</li>
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
      return <p>Gals</p>
    } else if (whichContent === 'followers') {
      return (
        <ul className="crt-mdl-flrs">
          <h1>Followers:</h1>
          {modalFollowers}
        </ul>
      )
    } else if (whichContent === 'following') {
      return (
        <ul className="crt-mdl-flrs">
          <h1>Following:</h1>
          {modalFollowing}
        </ul>
      )
    } else {
      return ''
    }
  }
  return (
    <div className="modal-background">
      <div className='crt-mdl'>
        <button className="modal-close" onClick={closeModal}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.26782 7.98907L15.7505 1.50641C16.0873 1.15763 16.0825 0.603223 15.7397 0.260349C15.3968 -0.0825247 14.8424 -0.0873423 14.4936 0.249521L8.01093 6.73218L1.52828 0.249521C1.1795 -0.0873423 0.625091 -0.0825247 0.282217 0.260349C-0.0606571 0.603223 -0.0654748 1.15763 0.271389 1.50641L6.75405 7.98907L0.271389 14.4717C0.0403167 14.6949 -0.0523551 15.0254 0.0289918 15.3362C0.110339 15.647 0.353045 15.8897 0.663826 15.971C0.974608 16.0524 1.3051 15.9597 1.52828 15.7286L8.01093 9.24595L14.4936 15.7286C14.8424 16.0655 15.3968 16.0607 15.7397 15.7178C16.0825 15.3749 16.0873 14.8205 15.7505 14.4717L9.26782 7.98907Z" fill="#222222"></path>
          </svg>
        </button>
        <div className="crt-mdl-content">
          ({creator}) {userName}'s Information and Posts:
          <div className='crt-mdl-follows'>
            <button onClick={() => setWhichContent('followers')}>
              <p>{`${owner.followers.length} Followers`}</p>&nbsp;
            </button>
            <button onClick={() => setWhichContent('following')}>
              <p>{`${owner.followees.length} Following`}</p>
            </button>
          </div>
          <p>Another Test</p>
          <button onClick={() => setWhichContent('pics')}>Pictures Toggle</button>
          <button onClick={() => setWhichContent('gals')}>Galleries Toggle</button>
          {modalContent()}
        </div>
      </div>
    </div>
  )
}
