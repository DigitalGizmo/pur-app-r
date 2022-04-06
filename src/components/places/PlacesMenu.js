import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const PlacesMenu = () => {
  const { currPage, changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('places');
  }, [])

  return (
    <div className="short-page">
      <header className="basic-page">
        <h1>Place-Based Explorations</h1>
      </header>
      <ul className="list-menu">
        <li>DeBug - currPage: { currPage} </li>
        <li><Link to="/places/stuy-stroll">Stroll By: The Gas House District - 1st Avenue &amp; 14th Street</Link></li>
        <li><Link to="/places/newburgh">Newburgh from the Planner&rsquo;s Perspective</Link></li>
        <li><Link to="/places/kingston">Kingston: Best Laid Plans&hellip;</Link></li>
      </ul>
    </div>
  )
}

export default PlacesMenu;