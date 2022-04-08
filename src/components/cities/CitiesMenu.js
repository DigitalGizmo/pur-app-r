import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const CitiesMenu = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('cities');
  }, [])

  return (
    <div className="city-story">
      <header className="basic-page">
        <h1>4 Cities / 4 Stories</h1>
      </header>
{/*      <ul className="list-menu">
        <li><a href="http://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html">Albany: Lost Places/Displaced People - The Reaction to Redevelopment</a></li>
      </ul>*/}

      <iframe 
        title = "Cities Menu"
        style={{border: `1px solid rgba(0, 0, 0, 0.1)`}} 
        width="1250px" height="1250px" 
        src="https://framer.com/embed/Scroll-Trigger-Hopefully--hbA7M8KLJF1SERQjjP4i/IrcEX2DOx?highlights=0" 
        >
      </iframe>

    </div>
  )
}

export default CitiesMenu;