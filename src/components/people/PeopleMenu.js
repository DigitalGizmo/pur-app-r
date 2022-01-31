import React from 'react';
import { Link } from 'react-router-dom';

const PeopleMenu = () => {
  return (
    <div>
      <header className="basic-page">
        <h1>Personal Stories</h1>
      </header>
      <ul className="list-menu">
        <li><Link to="/people/haines-dauner">Bob Haines &amp; Gene Dauner, Photographers</Link></li>
        <li><Link to="/people/carrie-wilson">Carrie Wilson</Link></li>
        <li><Link to="/people/joseph-resnick">Joseph Y. Resnick, US Congressman</Link></li>
      </ul>
    </div>
  )
}

export default PeopleMenu;