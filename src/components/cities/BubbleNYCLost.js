import React from 'react'; // , { useState, useEffect }
// import { Link } from 'react-router-dom';
// import SubPopShell from './SubPopShell';

const BubbleAlbanyLost = ({onSubPopLinkClick}) => {
  // const [subPopIsShowing, setSubPopIsShowing] = useState(false);
  // const [popToShow, setPopToShow] = useState("whammy")

  return (
    <div>
      <header className="bubbles">
        <h1>New York City:<br/>Precursor to Urban Renewal</h1>
        <p>City leaders empowered MetLife to seize private property for construction of the Stuyvesant Town housing complex. Lawsuits soon followed.</p>
        <p>Explore the features related to this story, or link to the city story: <a href="">Precursor to Urban Renewal<span className="not-done">Not yet implemented</span></a></p>
      </header>

      <section className="bubble-zone">
        <dl className="bubble1 place">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("stroll");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/gashouse-stroll.jpg" alt="bubble 1"/></dt>
            <dd className="feature-title"><span className="asterisk">*</span>Sidewalk Strolls</dd>
            <dd>Stroll the sidewalks and meet the people of New York&apos;s Gas House District</dd>
          </a>
        </dl>

        <dl className="bubble2 essay">
        {/* <a href="/" onClick={onSubPopLinkClick(e, "campbell")}> */}
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("theme-zipp");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/gasworks.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title"><span className="asterisk">*</span>Essays</dd>
            <dd>Ghost City: MetLife&apos;s Gas House District Photos</dd>
          </a>
        </dl>

        <dl className="bubble6 people">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/robt-moses.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">People</dd>
            <dd>Robert Moses: The Mastermind of Stuyvesant Town</dd>
          </a>
        </dl>

        <dl className="bubble3 people">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/ecker.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">People</dd>
            <dd>Frederick Ecker: A Prudent Investment</dd>
          </a>
        </dl>

        <dl className="bubble4 essay">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/blight.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">Essay</dd>
            <dd>What is Blight?</dd>
          </a>
        </dl>

        <dl className="bubble7 people">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/charles-abrams.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">People</dd>
            <dd>Charles Abrams and the &ldquo;Walled City&rdquo;</dd>
          </a>
        </dl>

        <dl className="bubble8 gallery">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/mapping-blight.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">Exhibits</dd>
            <dd>Mapping Blight</dd>
          </a>
        </dl>        

      </section>
    </div>
  );
} // end class

export default BubbleAlbanyLost;

