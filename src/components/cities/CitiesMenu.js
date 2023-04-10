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
        <nav>
          <p><Link to="/"><img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png"/>Picturing Urban Renewal</Link> &gt; 4 Cities / 4 Stories</p>
        </nav>
      </header>

      <div className="city-story-grid">
        <ul>
          <li className="toprow intro">Intro: <span>What Was Urban Renewal?</span></li>
          <li className="toprow nyc">New York City <span>A Suburb in the City</span></li>
          <li className="toprow newburgh">Newburgh <span>Demolition Without Redevelopment</span></li>
          <li className="toprow kingston">Kingston <span>A Tale of Two Neighborhoods</span></li>
          <li className="toprow albany">Albany <span>Brasilia on the Hudson</span></li>
          
          <li className="roots intro">The Roots of Renewal</li>
          <li className="roots nyc">Percursor to Urban Renewal</li>
          <li className="roots newburgh">"Negro Removal"</li>
          <li className="roots kingston">Demolition vs Rehabilitation</li>
          <li className="roots albany">The Temporary Commission</li>

          <li className="lost intro">Lost Places, Displaced People</li>
          <li className="lost nyc">Tenant Relocation Bureau, Inc.</li>
          <li className="lost newburgh">The Fight Over Public Housing</li>
          <li className="lost kingston">Protesting Demolition</li>
          <li className="lost albany">Reaction to Redevelopment</li>

          <li className="recon intro">Reconstruction</li>
          <li className="recon nyc">Modern-day Walled City</li>
          <li className="recon newburgh">No Panacea</li>
          <li className="recon kingston">Plans Change</li>
          <li className="recon albany">"Beautiful, Brilliant, Efficient, and Electrifying"</li>

          <li className="legacy intro">A Mixed Legacy</li>
          <li className="legacy nyc">Activist Tenants</li>
          <li className="legacy newburgh">A Blank Canvas</li>
          <li className="legacy kingston">Preservationists and Gentrifiers</li>
          <li className="legacy albany">Community Building</li>          

        </ul>
      </div>

    </div>
  )
}

export default CitiesMenu;