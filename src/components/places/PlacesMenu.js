import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../common/MainNav';

const PlacesMenu = () => {
  return (
    <div>
      <MainNav selected='places'/>>
      <h2>Place-Based Explorations</h2>
      <ul>
        <li><a href="http://app.picturingurbanrenewal.org/places/stuy-stroll">Stroll By: 1st Avenue &amp; 14th Street</a> </li>        
        <li><Link to="/places/newburgh">Newburgh</Link></li>
      </ul>
    </div>
  )
}

export default PlacesMenu;