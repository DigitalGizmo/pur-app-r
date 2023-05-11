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
        <nav>
          <p>
            <Link to="/">
              <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
              alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
            </Link> &gt; Essays
          </p>
        </nav>
      </header>

      <nav className="horiz-menu">
        <ul>
          <li className="contract-sales"><Link to="/themes/theme"><span className="asterisk">*</span> Buyer Beware: Contract Sales</Link>David Hochfelder, University of Albany, SUNY</li>
          <li className="who-lived-here"><Link to="/themes/theme-campbell"><span className="asterisk">*</span> Who Lived Here? The Lives of Albany Residents Revealed in Photographs</Link>Robin Campbell, University of Albany, SUNY</li>
          <li className="ghost-city"><Link to="/themes/theme-zipp"><span className="asterisk">*</span> Ghost City: MetLife&rsquo;s Gas House District Photos</Link>Samuel Zipp, Brown University</li>
          <li className="root-shock"><Link to="/themes/theme-fullilove"><span className="asterisk">*</span> Root Shock</Link>Mindy Thompson Fullilove, The New School</li>
          <li className="anti-urban"><Link to="" className="not-done-wrapper"><span className="not-done">Not yet implemented</span>The Anti-Urban Nature of Urban Renewal</Link>Steven Conn, Miami University</li>
          <li className="blight"><Link to="" className="not-done-wrapper"><span className="not-done">Not yet implemented</span>What is Blight?</Link>Colin Gordon</li>
{/*          <li className="ghost-city"><Link to="">Streetscapes: Kingston</Link>William Krattinger</li>
          <li className="root-shock"><Link to="">Streetscapes: Stuyvesant Town</Link>William Krattinger</li>
          <li className="ghost-city"><Link to="">Streetscapes: Newburgh</Link>William Krattinger</li>
          <li className="root-shock"><Link to="">Streetscapes: Albany</Link>William Krattinger</li>*/}
        </ul>
      </nav>
    </div>
  )
}

export default ThemeMenu;