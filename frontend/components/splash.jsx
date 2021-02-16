import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="body-box">
      <div className="top-image">
        <div className="top-image-content">
          <h2>Discover and share the world's best photos</h2>
          <p>
            Get inspired with incredible photos from diverse styles and genres 
            around the world. We're not guided by fads - just great photography.
          </p>
          <button>
            <Link
              to='/register'
              style={{ color: 'inherit', textDecoration: 'inherit' }}>
              Register
            </Link>
          </button>
          {/* <div id="wave">
          </div> */}
        </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
              fill="#f3f4f5" 
              fillOpacity="1" 
              d="M0,192L60,165.3C120,139,240,85,360,80C480,75,600,117,720,149.3C840,181,960,203,1080,181.3C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
            </path>
          </svg>
      </div>
      <div className="about-five88px">
        <h3>What makes us different?</h3>
        <div className="about-content">
          <span className="text-images plant"></span>
          <h4>Grow as a photographer</h4>
          <p>Get immediate exposure with your first upload. Our Pulse algorithm
          surfaces new photographs and photographers, ensuring your photos are seen
      by the community so you receive valuable feedback on day one.</p>
        </div>
        <div className="about-content">
          <span className="text-images ruler"></span>
          <h4>Build your career</h4>
          <p>Present yourself as a professional. Get hired by displaying your
          services, create a Directory listing, showcase the workshops you're
          holding, and create Galleries to highlight your work.</p>
        </div>
        <div className="about-content">
          <span className="text-images statistics">
          </span>
          <h4>See how you're performing</h4>
          <p>With Statistics and Pulse you get valuable insights into how your
          photos are performing and how you rank in comparison to other
      photographers in the community.</p>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <h3>Join our community today</h3>
          <p>Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators?
            <br/>
          Then sign-up today and get rewarded for your love of photography.</p>
          <button>
            <Link
              to='/register'
              style={{ color: 'inherit', textDecoration: 'inherit' }}>
              Register
            </Link>
          </button>
        </div>
      </div>
      <div>
        <footer>
          © 588PX - 2021
        </footer>
      </div>
    </div>
  )
}

export default Splash;