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
          <Link to="/cities">4 Cities/4 Stories</Link>
        </li>   
        <li className={ currPage === 'people' ? 'selected' : ''}>
          <Link to="">People<span className="not-done">Not yet implemented</span></Link>
        </li>        
        <li className={ currPage === 'places' ? 'selected' : ''}>
          <Link to="">Places<span className="not-done">Not yet implemented</span></Link>
        </li>  
        <li className={ currPage === 'visuals' ? 'selected' : ''}>
          <Link to="/archive/visuals">Visuals</Link>
        </li>
        <li className={ currPage === 'timeline' ? 'selected' : ''}>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li className={ currPage === 'galleries' ? 'selected' : ''}>
          <Link to="">Galleries<span className="not-done">Not yet implemented</span></Link>
        </li>
        <li className={ currPage === 'themes' ? 'selected' : ''}>
          <Link to="/themes"
          dangerouslySetInnerHTML={{ __html: 'Essays' }}></Link>
        </li>
      </ul>

      <ul className="bottom-secondary">
        <li><Link to="">About<span className="not-done">Not yet implemented</span></Link></li>
        <li><Link to="">Resources for Educators<span className="not-done">Not yet implemented</span></Link></li>
        <li><Link to="">Urban Renewal in Your Community<span className="not-done">Not yet implemented</span></Link></li>
        <li><Link to="">Contact<span className="not-done">Not yet implemented</span></Link></li>
      </ul>      
    </nav>
  );
}

export default BottomNav;
