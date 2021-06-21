import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LikesModal (props) {
  let [whichContent, setWhichContent] = useState('inward likes');
  
  let { session, allUsers, allPhotos, showModal, closeModal } = props;
  
  let currentUser = allUsers ? allUsers[session] : {};
  currentUser = currentUser ? currentUser : {};
  let inwardLikes = currentUser.likedPics ? currentUser.likedPics : [];
  let outwardLikes = currentUser.picLikes ? currentUser.picLikes : [];
  if (!showModal) return null;
  allUsers = allUsers ? allUsers : [];
  allPhotos = allPhotos ? allPhotos : [];

  // outwardLikes = outwardLikes.map(like => {
  //   allPhotos.filter((photo, i) => {
  //     <li key={i}>
  //       {photo.title}
  //     </li>
  //   })
  // })
  const likedPicTitles = [];
  
  allPhotos.filter(photo => {
    outwardLikes.map((like, i) => {
      if (like.picture_id === photo.id) {
          likedPicTitles.push(
            <li key={i}>
              <Link 
                className="liked-pic-link" 
                to={`/pictures/${photo.id}`}>
                {photo.title}
              </Link>
            </li>
          )
      }
    })
  });

  const modalContent = () => {
    if (whichContent === 'inward likes') {
      return (
        <>
          {inwardLikes.length === 0 ? <p>You don't have any likes yet.</p> :
          <ul>
            <p>Your pictures are liked</p>
          </ul>}
        </>
      )
    } else {
      return (
        <>
          {outwardLikes.length === 0 ? <p>You haven't liked any photos yet</p> :
          <ul className="like-content">
            {likedPicTitles}
          </ul>}
        </>
      )
    }
  }
  
  console.log("Like Modal Props")
  console.log(props)
  console.log("Current User")
  console.log(currentUser)
  console.log("Inward Likes")
  console.log(inwardLikes)
  console.log("Outward Likes")
  console.log(outwardLikes)
  console.log("Liked Pic Titles")
  console.log(likedPicTitles)
  return (
    <div className="modal-background">
      <div className="crt-mdl">
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
        <p>HELLO WORLD</p>
        <div className="crt-mdl-content">
          <h1>Your Likes</h1>
          <div className='crt-mdl-follows'>
            <button className={whichContent === "inward likes" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('inward likes')}>Likes</button>&nbsp;
            <button className={whichContent !== "inward likes" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('outward likes')}>Pictures You Like</button>
          </div>
          {modalContent()}
        </div>
      </div>
    </div>
  )
};