import React from 'react';
import { Link } from 'react-router-dom';

const PlacesMenu = () => {
  return (
    <div>
      <header className="basic-page">
        <h1>Place-Based Explorations</h1>
      </header>
      <ul className="list-menu">
        <li><a href="http://app.picturingurbanrenewal.org/places/stuy-stroll">Stroll By: 1st Avenue &amp; 14th Street</a> </li>        
        <li><Link to="/places/newburgh">Newburgh</Link></li>
      </ul>
    </div>
  )
}

export default PlacesMenu;