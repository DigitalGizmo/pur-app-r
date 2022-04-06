import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import './MainNav.css';

const BottomNav = (props) => {
  const { currPage } = useContext(GlobalContext);

  return (
    <nav className="bottom-menu">
      <ul>
        <li>
          About
        </li>        
        <li className={ currPage === 'visuals' ? 'selected' : ''}>
          <Link to="/archive/visuals">Visual Record</Link>
        </li>
        <li className={ currPage === 'timeline' ? 'selected' : ''}>
          <Link to="/timeline">Timeline</Link></li>
        <li className={ currPage === 'themes' ? 'selected' : ''}>
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
