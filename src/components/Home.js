import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {

    return (
      <div className="home">
      <section className="home-test">
        <header>
          <h1>Picturing Urban Renewal</h1>
          <p>Picturing Urban Renewal invites visitors to explore the visual history of urban renewal in four U.S. cities. Each city’s story is different. Combined, these stories shed light on an era of  optimism, tragedy, and transformation.</p>
          <Link to="">What Was Urban Renewal?</Link>
        </header>

        <ul className="home-primary-menu">
          <li className="city-stories"><Link to="/cities">4 Cities / 4 Stories</Link></li>
          <li><Link to="/sights">Sights &amp; Sounds</Link></li>
          <li><Link to="/places">Place-Based Explorations</Link></li>
          <li><Link to="/people">Personal Stories</Link></li>
        </ul>

        <ul className="home-secondary-menu">
          <li><Link to="">About</Link></li>
          <li><Link to="/archive/visuals">The Visual Record</Link></li>
          <li><Link to="/themes">Themes &amp; Essays</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="">Resources</Link></li>
        </ul>
        </section>
      </div>
    );
  } // end render
} // end class

export default Home;
