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
              <Link to="/themes">Gallery</Link> &gt;
              City Intro NYC
            </p>
          </nav>
          <div className="page-title">
            <h1>City Intro NYC</h1>
            <h4>suburb</h4>
          </div>
        </header>
      }

      <section>
        <div className="image-full">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/slip-cover-top.jpg"
              alt='meaningful alt text'/>
        </div>

        <div className="theme">
          <p className="caption first">From looking at this photo, what can you tell about the people who once lived here? Source: New York State Archives.</p>

          <article className="narrative">
            <p className="intro">This essay is based on a series of appraisal photographs taken by the State of New York, 1962-1964. Material culture depicted in these photographs, whether richly appointed domestic interiors or sparsely furnished rooming houses, reveal much about the people who inhabited those spaces.</p>

           </article>
        </div>
      </section>
    </div>
  );

}

export default CityIntroNyc;