import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../common/MainNav';

const PeopleMenu = () => {
  return (
    <div>
      <MainNav />
      <h2>Personal Stories</h2>
      <ul>
        <li><Link to="/people/haines-dauner">Bob Haines and Gene Dauner, Photographers</Link></li>
        <li><Link to="/people/carrie-wilson">Carrie Wilson</Link></li>
        <li><a href="http://dev.picturingurbanrenewal.org/wireframe/people/joseph-resnick.html">
      Joseph Resnick, US Congressman</a></li> 
      </ul>
    </div>
  )
}

export default PeopleMenu;