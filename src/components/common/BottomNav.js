import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

const BottomNav = (props) => {
  return (
    <nav className="">
      <ul>
        <li>
          About
        </li>        
        <li className={ props.selected === 'visuals' ? 'selected' : ''}>
          <Link to="/archive/visuals">Visual Record</Link>
        </li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li className={ props.selected === 'themes' ? 'selected' : ''}>
          <Link 
          to="/themes"
          dangerouslySetInnerHTML={{ __html: 'Themes &amp; Essays' }}></Link>
        </li>  
        <li>
          Resources
        </li>        
      </ul>
    </nav>
);
}

export default BottomNav;
