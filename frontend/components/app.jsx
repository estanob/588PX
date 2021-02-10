import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>588PX</h1>
        </Link>
      </header>
      {/* <Switch></Switch> */}
    </div>
  )
}

export default App;