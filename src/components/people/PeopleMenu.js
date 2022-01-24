import React from 'react';
import { Link } from 'react-router-dom';

const PeopleMenu = () => {
  return (
    <div className="menu-page">
      <h2>Personal Stories</h2>
      <ul>
        <li><Link to="/people/haines-dauner">Bob Haines and Gene Dauner, Photographers</Link></li>
        <li><Link to="/people/carrie-wilson">Carrie Wilson</Link></li>
        <li><Link to="/people/joseph-resnick">Joseph Y. Resnick, US Congressman</Link></li>
      </ul>
    </div>
  )
}

export default PeopleMenu;