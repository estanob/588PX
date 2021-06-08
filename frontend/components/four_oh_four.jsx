import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => {
  return(
    <div className='four-oh'>
      <h2 className='four-oh-four-title'>Error 404</h2>
      <p>Page not found, return to the <Link to='/'>Home Page</Link></p>
    </div>
  )
};

export default FourOhFour;