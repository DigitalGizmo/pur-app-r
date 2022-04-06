import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = (props) => {
  const { currPage } = useContext(GlobalContext);

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={ currPage === 'cities' ? 'selected' : ''}>
          <Link to="/cities">4 Cities / 4 Stories</Link>
        </li>
        <li className={ currPage === 'sights' ? 'selected' : ''}>
          <Link 
          to="/sights"
          dangerouslySetInnerHTML={{ __html: 'Sights &amp; Sounds' }}></Link>
        </li>  
        <li className={ currPage === 'places' ? 'selected' : ''}>
          <Link to="/places">Places</Link>
        </li>  
        <li className={ currPage === 'people' ? 'selected' : ''}>
          <Link to="/people">Personal Stories</Link>
        </li>        

      </ul>
    </nav>
  );
}

export default MainNav;
