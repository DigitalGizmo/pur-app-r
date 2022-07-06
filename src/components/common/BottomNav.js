import React, { useContext } from 'react';
import { GlobalPageNameStateContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import './MainNav.css';

const BottomNav = (props) => {
  const currPage = useContext(GlobalPageNameStateContext);

  return (
    <nav className="bottom-menu">
      <ul>
        <li className={ currPage === 'visuals' ? 'selected' : ''}>
          <Link to="/archive/visuals">Visual Record</Link>
        </li>
        <li className={ currPage === 'timeline' ? 'selected' : ''}>
          <Link to="/timeline">Timeline</Link></li>
        <li className={ currPage === 'themes' ? 'selected' : ''}>
          <Link 
          to="/themes"
          dangerouslySetInnerHTML={{ __html: 'Essays' }}></Link>
        </li>  
        <li>
          Educational Resources
        </li>
        <li>
          About
        </li>        
        <li>
          Contact Us
        </li>        
      </ul>
    </nav>
  );
}

export default BottomNav;
