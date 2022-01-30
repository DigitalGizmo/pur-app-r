import React from 'react';
import { Link } from 'react-router-dom';

const PlacesMenu = () => {
  return (
    <div className="menu-page">
      <h2>Place-Based Explorations</h2>
      <ul>
        <li><a href="http://app.picturingurbanrenewal.org/places/stuy-stroll">Stroll By: 1st Avenue &amp; 14th Street</a> </li>        
        <li><Link to="/places/newburgh">Newburgh</Link></li>
        <li style={{ color: '#333333'}}>
          <Link 
            to="/places/stuy-stroll"
            style={{ color: '#554455'}}>
          (Developing -- stroll)
        </Link></li>
      </ul>
    </div>
  )
}

export default PlacesMenu;