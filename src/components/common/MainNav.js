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
        <li className={ props.selected === 'sights' ? 'selected' : ''}>
          <Link 
          to="/sights"
          dangerouslySetInnerHTML={{ __html: 'Sights &amp; Sounds' }}></Link>
        </li>  
        <li className={ props.selected === 'places' ? 'selected' : ''}>
          <Link to="/places">Places</Link>
        </li>  
        <li className={ props.selected === 'people' ? 'selected' : ''}>
          <Link to="/people">Personal Stories</Link>
        </li>        

      </ul>
    </nav>
);
}

export default MainNav;
