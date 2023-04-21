import React from 'react'; // , {useEffect, useContext}
// import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const CityIntroNyc = ({isSubPop}) => {
  // const { changePageName } = useContext(GlobalContext);

  // useEffect(() => {
  //   changePageName('themes');
  //   document.title = 'Essay: Who Lived Here?';
  // }, [changePageName])

  return (
    <div>
{/*
      {isSubPop ?
        <header className="basic-page">
          <h4><Link to="/themes">Essays -></Link></h4>
          <h2>City Intro - NYC</h2>
          <h4>A suburb in the city</h4>
        </header>
      :
        <header className="basic-page">
          <nav>
            <p>
              <Link to="/">
                <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
                alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
              </Link> &gt; &nbsp;
              <Link to="">Galleries</Link> &gt;
              New York City: Visual Intro
            </p>
          </nav>
          <div className="page-title">
            <h1>New York City: Visual Intro</h1>
            <h4>do we have/want a subhead?</h4>
          </div>
        </header>
      }*/}

      <section>
        <div className="image-full">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/nyc-visual-intro.jpg"
              alt='static mockup of visual intro'/>
        </div>

      </section>
    </div>
  );

}

export default CityIntroNyc;