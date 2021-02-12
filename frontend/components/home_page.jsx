import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="body_box">
      <div className="top_image">
        <div className="top-image-content">
          <h2>Discover and share the world's best photos</h2>
          <p>Get inspired with incredible photos from diverse styles and genres 
            around the world. We're not guided by fads - just great photography.</p>
        </div>
      </div>
      <footer>
        © Pinhole - 2021
      </footer>
    </div>
  )
}

export default HomePage;