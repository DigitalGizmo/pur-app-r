import React from 'react';
import { Link } from 'react-router-dom';

const ThemeMenu = () => {
  return (
    <div className="">
        <header className="basic-page">
          <h1>Themes &amp; Essays</h1>
        </header>

        <nav className="horiz-menu">
          <ul>
            <li className="contract-sales"><Link to="/themes/theme">Buyer Beware: Contract Sales</Link>David Hochfelder, University of Albany, SUNY</li>
            <li className="who-lived-here"><Link to="/themes/theme-campbell">Who Lived Here? The Life of Albany&rsquo;s Residents Revealed in Photographs</Link>Robin Campbell, University of Albany, SUNY</li>
            <li className="anti-urban"><Link to="">The Anti-Urban Nature of Urban Renewal</Link>Steven Conn, Miami University</li>
            <li className="root-shock"><Link to="/themes/theme-fullilove">Root Shock</Link>Mindy Thompson Fullilove, The New School</li>
            <li className="ghost-city"><Link to="/themes/theme-zipp">Ghost City: Met Life&rsquo;s Gas House District Photos</Link>Samuel Zipp, Brown University</li>
            <li className="root-shock"><Link to="">What is Blight?</Link>Colin Gordon</li>
            <li className="ghost-city"><Link to="">Streetscapes: Kingston</Link>J.P. Krattinger</li>
            <li className="root-shock"><Link to="">Streetscapes: Stuyvesant Town</Link>J.P. Krattinger</li>
            <li className="ghost-city"><Link to="">Streetscapes: Newburgh</Link>J.P. Krattinger</li>
            <li className="root-shock"><Link to="">Streetscapes: Albany</Link>J.P. Krattinger</li>
          </ul>
        </nav>
    </div>
  )
}

export default ThemeMenu;