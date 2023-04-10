import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const CitiesMenu = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('cities');
    document.title = '4 Cities / 4 Stories';
  }, [changePageName])

  return (
    <div className="city-story">
      <header className="basic-page">
        <h1><Link to="/">Picturing Urban Renewal</Link> &gt; 
          4 Cities / 4 Stories</h1>
      </header>

      <div>
        <p>New, real city grid here</p>
        <p><Link to="/cities-framer">Framer version</Link></p>
      </div>

    </div>
  )
}

export default CitiesMenu;