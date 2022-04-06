import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const SightsMenu = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('sights');
  }, [])

  return (
    <div className="">
      <header className="basic-page">
        <h1>Sights &amp; Sounds</h1>
        <p className="blurb">This menu offers links to eight brief videos (6 to 8 minutes) that introduce the four cities and four themes comprising this website.</p>
    </header>

      <div className="sights-menu">
        <img 
          alt="design for what the sites and sounds menu will look like"
          src="http://dev.picturingurbanrenewal.org/prod-assets/sights/images/sightssounds-menu.jpg" 
        /> 

        <article className="intro-panel">
          <p>Play video: <Link to="/sights/gastown-stuytown">A Suburb in the City</Link></p>
        </article>
      </div>
    </div>
  )
}

export default SightsMenu;