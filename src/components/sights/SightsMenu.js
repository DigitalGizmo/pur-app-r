import React from 'react';
import { Link } from 'react-router-dom';
// import StuyTownVideo from './StuyTownVideo';

const SightsMenu = () => {
  return (
    <div className="short-page">
      <header className="basic-page">
        <h1>Sights &amp; Sounds</h1>
      </header>
      <ul className="list-menu">
        <li><Link to="/sights/gastown-stuytown">Gas Town to StuyTown</Link></li>
      </ul>

    </div>
  )
}

export default SightsMenu;