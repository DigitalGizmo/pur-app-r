import React from 'react';
import './MainNav.css';

const MainNav = () => {
  return (
    <div >
      <nav className="main-menu">
        <ul>
          <li><a href="http://app.picturingurbanrenewal.org/">Home </a></li>
          <li><a href="http://app.picturingurbanrenewal.org/cities">4 Cities / 4 Stories</a> </li>
          <li><a href="http://app.picturingurbanrenewal.org/people">Personal Stories</a> </li>
          <li><a href="http://app.picturingurbanrenewal.org/visuals">Visual Record</a> </li>
          <li><a href="http://app.picturingurbanrenewal.org/places">Places</a></li>  
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;

