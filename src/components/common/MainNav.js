import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = (props) => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={ props.selected === 'cities' ? 'selected' : ''}>
          <Link to="/cities">4 Cities / 4 Stories</Link>
        </li>
        <li className={ props.selected === 'people' ? 'selected' : ''}>
          <Link to="/people">Personal Stories</Link>
        </li>
        <li className={ props.selected === 'visual' ? 'selected' : ''}>
          <a href="http://app.picturingurbanrenewal.org/visuals">Visual Record</a> 
        </li>
        <li className={ props.selected === 'places' ? 'selected' : ''}>
          <Link to="/places">Places</Link>
        </li>  
      </ul>
    </nav>
);
}

export default MainNav;

