import React from 'react'; // , { useState, useEffect }
// import { Link } from 'react-router-dom';
// import SubPopShell from './SubPopShell';

const BubbleAlbanyLost = ({onSubPopLinkClick}) => {
  // const [subPopIsShowing, setSubPopIsShowing] = useState(false);
  // const [popToShow, setPopToShow] = useState("whammy")

  return (
    <div>
      <header className="bubbles">
        <h1>Albany: Reaction to Redevelopment</h1>
        <p>The mayor sued to prevent the seizure of land. But most area residents responded with resignation.</p>
        <p>Explore the features related to this story, or link to the narrative <a href="https://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html">city story</a>.</p>
      </header>
      <section className="bubble-zone">
        <dl className="bubble1 place">
        <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("stroll");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/times-union-front-page.jpg" alt="bubble 1"/></dt>
            <dd className="feature-title">Places</dd>
            <dd>Stroll along the sidewalks of pre-demolition Albany.</dd>
          </a>
        </dl>

        <dl className="bubble2 essay">
        {/* <a href="/" onClick={onSubPopLinkClick(e, "campbell")}> */}
        <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("campbell");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/NYSA_interior.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">Essays</dd>
            <dd>Who Lived Here? The lives of Albany residents are revealed in photos.</dd>
          </a>
        </dl>

        <dl className="bubble3 people">
        <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("strawn");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/jimmy-strawn.jpg" alt="bubble 2"/></dt>
            <dd className="feature-title">People</dd>
            <dd>Jimmy Strawn: The Sultan of Swing</dd>
          </a>
        </dl>
      </section>
    </div>
  );
} // end class


export default BubbleAlbanyLost;
