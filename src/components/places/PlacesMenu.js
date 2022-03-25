import React from 'react';
import { Link } from 'react-router-dom';

const PlacesMenu = () => {
  return (
    <div className="short-page">
      <header className="basic-page">
        <h1>Place-Based Explorations</h1>
      </header>
      <ul className="list-menu">
        <li><Link to="/places/stuy-stroll">Stroll By: 1st Avenue &amp; 14th Street</Link></li>
        <li><Link to="/places/newburgh">Newburgh</Link></li>
      </ul>
    </div>
  )
}

export default PlacesMenu;