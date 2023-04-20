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
    document.title = 'Home';
  }, [changePageName])

  // useEffect(() => {
  //   // changePageName('home');
  //   document.title = 'Home';
  // }, [])

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
          <p>Walking through almost any American downtown, you might come across acres of empty space, blocks of parking lots, or places where the architecture shifts dramatically. These are the products of urban renewal. Missing are the people displaced, their homes, 
and the businesses they once patronized.</p>

          <p>This website aims to put these people and places back in the picture and to explore the short- and longer-term effects of this controversial policy.&nbsp;
          <a href='/' 
              onClick={e => { e.preventDefault(); setShowingHomePop(true);}}
            >Read more&hellip;</a></p>
        </header>
        <p>Begin your visit</p>

        <h2 className="city-stories">
          <Link to="/cities">4 Cities / 4 Stories</Link>
        </h2>

        <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/NEH-Preferred-Seal-Transparent820.png"
              alt='NEH logo' className="neh-logo"/>

        <p className="tips">    
          <a 
              href='/' 
              onClick={e => { e.preventDefault(); setShowingViewTips(true);}}
            >[Prototype Viewing Tips]</a>
        </p>
      </section>

        <footer>
          <nav className="bottom-menu">
            <ul>
              <li><Link to="">People<span className="not-done">Not yet implemented</span></Link></li>
              <li><Link to="">Places<span className="not-done">Not yet implemented</span></Link></li>
              <li><Link to="/archive/visuals">Visuals</Link></li>
              <li><Link to="/timeline">Timeline</Link></li>
              <li><Link to="">Galleries<span className="not-done">Not yet implemented</span></Link></li>
              <li><Link to="/themes">Essays</Link></li>
            </ul>
            <ul className="bottom-secondary">
              <li><Link to="">About<span className="not-done">Not yet implemented</span></Link></li>
              <li><Link to="">Resources for Educators<span className="not-done">Not yet implemented</span></Link></li>
              <li><Link to="">Urban Renewal in Your Community<span className="not-done">Not yet implemented</span></Link></li>
              <li><Link to="">Contact<span className="not-done">Not yet implemented</span></Link></li>
            </ul>
          </nav>
        </footer>


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

    </div>/* /div.home */
  )
} // end Home

export default Home;
