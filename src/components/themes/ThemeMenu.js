import React from 'react';
import { Link } from 'react-router-dom';
import './Themes.css';

const ThemeMenu = () => {
  return (
    <div className="">
        <header className="basic-page">
          <h1>Themes &amp; Essays</h1>
        </header>
        <nav className="horiz-menu">
          <ul>
            <li className="contract-sales"><Link to="/themes/theme">Buyer Beware: Contract Sales</Link>David Hochfelder, SUNY Albany</li>
            <li className="who-lived-here"><Link to="/themes/theme">Who Lived Here? The Life of Albany&rsquo;s Residents Revealed in Photographs</Link>Robin Campbell</li>
            <li className="anti-urban"><Link to="/themes/theme">The Anti-Urban Nature of Urban Renewal</Link>Steven Conn, Miami University</li>
            <li className="root-shock"><Link to="/themes/theme">Root Shock</Link>Mindy Thompson Fullilove, MD</li>
            <li className="ghost-city"><Link to="/themes/theme">Ghost City: Met Life&rsquo;s Gas House District Photos</Link>Samuel Zipp</li>
            <li className="root-shock"><Link to="/themes/theme">What is Blight?</Link>Colin Gordon</li>
            <li className="ghost-city"><Link to="/themes/theme">Streetscapes: Kingston</Link>J.P. Krattinger</li>
            <li className="root-shock"><Link to="/themes/theme">Streetscapes: Stuyvesant Town</Link>J.P. Krattinger</li>
            <li className="ghost-city"><Link to="/themes/theme">Streetscapes: Newburgh</Link>J.P. Krattinger</li>
            <li className="root-shock"><Link to="/themes/theme">Streetscapes: Albany</Link>J.P. Krattinger</li>
          </ul>
        </nav>
    </div>
  )
}

export default ThemeMenu;