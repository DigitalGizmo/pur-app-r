import React, { useContext } from 'react';
import { GlobalPageNameStateContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import './MainNav.css';

const BottomNav = (props) => {
  const currPage = useContext(GlobalPageNameStateContext);

  return (
    <nav className="bottom-menu">
      <ul>
        <li className={ currPage === 'cities' ? 'selected' : ''}>
          <Link to="/cities"><span className="asterisk">*</span>4 Cities/4 Stories</Link>
        </li>
        <li className={ currPage === 'places' ? 'selected' : ''}>
          <a href="#">Sidewalk Strolls<span className="not-done">Not yet implemented</span></a>
        </li>        
        <li className={ currPage === 'people' ? 'selected' : ''}>
          <a href="#">People<span className="not-done">Not yet implemented</span></a>
        </li>        
        <li className={ currPage === 'timeline' ? 'selected' : ''}>
          <Link to="/timeline"><span className="asterisk">*</span>Timeline</Link>
        </li>
        <li className={ currPage === 'galleries' ? 'selected' : ''}>
          <a href="#">Exhibits<span className="not-done">Not yet implemented</span></a>
        </li>
        <li className={ currPage === 'visuals' ? 'selected' : ''}>
          <Link to="/archive/visuals"><span className="asterisk">*</span>Visuals</Link>
        </li>
        <li className={ currPage === 'themes' ? 'selected' : ''}>
          <Link to="/themes"><span className="asterisk">*</span>Essays</Link>
        </li>
      </ul>

      <ul className="bottom-secondary">
        <li><a href="#">About<span className="not-done">Not yet implemented</span></a></li>
        <li><a href="#">Resources for Educators<span className="not-done">Not yet implemented</span></a></li>
        <li><a href="#">Urban Renewal in Your Community<span className="not-done">Not yet implemented</span></a></li>
        <li><a href="#">Contact<span className="not-done">Not yet implemented</span></a></li>
        <li><a href="#">Site Search<span className="not-done">Not yet implemented</span></a></li>
      </ul>      
    </nav>
  );
}

export default BottomNav;
