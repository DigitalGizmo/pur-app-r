import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const ThemeMenu = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('themes');
    document.title = 'Essays';
  }, [changePageName])

  return (
    <div className="">
        <header className="basic-page">
          <h1>Essays</h1>
        </header>

        <nav className="horiz-menu">
          <ul>
            <li className="contract-sales"><Link to="/themes/theme">Buyer Beware: Contract Sales</Link>David Hochfelder, University of Albany, SUNY</li>
            <li className="who-lived-here"><Link to="/themes/theme-campbell">Who Lived Here? The Lives of Albany Residents Revealed in Photographs</Link>Robin Campbell, University of Albany, SUNY</li>
            <li className="anti-urban"><Link to="">The Anti-Urban Nature of Urban Renewal</Link>Steven Conn, Miami University</li>
            <li className="root-shock"><Link to="/themes/theme-fullilove">Root Shock</Link>Mindy Thompson Fullilove, The New School</li>
            <li className="ghost-city"><Link to="/themes/theme-zipp">Ghost City: MetLife&rsquo;s Gas House District Photos</Link>Samuel Zipp, Brown University</li>
            <li className="root-shock"><Link to="">What is Blight?</Link>Colin Gordon</li>
            <li className="ghost-city"><Link to="">Streetscapes: Kingston</Link>William Krattinger</li>
            <li className="root-shock"><Link to="">Streetscapes: Stuyvesant Town</Link>William Krattinger</li>
            <li className="ghost-city"><Link to="">Streetscapes: Newburgh</Link>William Krattinger</li>
            <li className="root-shock"><Link to="">Streetscapes: Albany</Link>William Krattinger</li>
          </ul>
        </nav>
    </div>
  )
}

export default ThemeMenu;