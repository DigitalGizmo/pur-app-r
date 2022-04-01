import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import HomePop from './HomePop';

const Home = () => {
  const [showingHomePop, setShowingHomePop] = useState(false);

  function showHomePop (indx) {
    setShowingHomePop(true);
  }  

  function closesHomePop (event) {
    // console.log(event.target.className)
    event.preventDefault()
    event.stopPropagation()
    // Close if click was on lightbox (background) or close
    if (event.target.className === 'lightbox' ||
    event.target.id === 'close-link') {
      setShowingHomePop(false);
    }
  }
 
  return (
    <div className="home">
      <section className="home-test">
        <header>
          <h1>Picturing Urban Renewal</h1>
          <p>Picturing Urban Renewal invites visitors to explore the visual history of urban renewal in four U.S. cities. Each city’s story is different. Combined, these stories shed light on an era of  optimism, tragedy, and transformation.</p>
            <a 
              href='/' 
              onClick={e => { e.preventDefault(); showHomePop();}}
            >Introduction: What Was Urban Renewal?</a>
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

      { showingHomePop && 
        <HomePop
          closesHomePop = {closesHomePop}
        />
      }

    </div>
  )
} // end Home

export default Home;
