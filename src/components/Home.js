import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import HomePop from './HomePop';
import ViewTips from './ViewTips';

const Home = () => {
  const [showingHomePop, setShowingHomePop] = useState(false);
  const [showingViewTips, setShowingViewTips] = useState(false);
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('home');
  }, [])

  function closePop (event) {
    // console.log(event.target.className)
    event.preventDefault()
    event.stopPropagation()
    // Close if click was on lightbox (background) or close
    if (event.target.className === 'lightbox' ||
    event.target.id === 'close-link') {
      setShowingHomePop(false);
      setShowingViewTips(false);
    }
  }
 
  return (
    <div className="home">
      <section className="home-wrapper">
        <header>
          <h1>Picturing Urban Renewal</h1>
          <p>Picturing Urban Renewal invites visitors to explore the visual history of urban renewal in four U.S. cities. Each city’s story is different. Combined, these stories shed light on an era of  optimism, tragedy, and transformation.</p>
            <a 
              href='/' 
              onClick={e => { e.preventDefault(); setShowingHomePop(true);}}
            >Introduction: What Was Urban Renewal?</a>
        </header>

        <ul className="home-primary-menu">
          <li className="city-stories"><Link to="/cities">4 Cities / 4 Stories</Link></li>
          <li><Link to="/sights">Sights &amp; Sounds</Link></li>
          <li><Link to="/places">Place-Based Explorations</Link></li>
          <li><Link to="/people">Personal Stories</Link></li>
        </ul>

        <ul className="home-secondary-menu">
          <li><Link to="/archive/visuals">The Visual Record</Link> | </li>
          <li><Link to="/timeline">Timeline</Link> | </li>
          <li><Link to="/themes">Essays</Link> | </li>
          <li><Link to="">Educational Resources</Link> | </li>
          <li><Link to="">About</Link> | </li>
          <li><Link to="">Contact Us</Link></li>
        </ul>

        <p className="tips">    
          <a 
              href='/' 
              onClick={e => { e.preventDefault(); setShowingViewTips(true);}}
            >[Prototype Viewing Tips]</a>
        </p>

      </section>

      { showingHomePop && 
        <HomePop
          closePop = {closePop}
        />
      }
      { showingViewTips && 
        <ViewTips
        closePop = {closePop}
        />
      }
        <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/NEH-Preferred-Seal-Transparent820.png"
              alt='NEH logo' className="neh-logo"/>
    </div>
  )
} // end Home

export default Home;
