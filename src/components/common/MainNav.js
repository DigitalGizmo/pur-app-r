import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  return (
    <div >
      <nav className="main-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cities">4 Cities / 4 Stories</Link></li>
          <li><Link to="/people">Personal Stories</Link></li>
          <li><a href="http://app.picturingurbanrenewal.org/visuals">Visual Record</a> </li>
          <li><Link to="/places">Places</Link></li>  
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;

