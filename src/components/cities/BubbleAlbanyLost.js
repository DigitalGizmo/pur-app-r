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
        <p>Explore the features related to this story, or link to the narrative <a href="https://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html"><span class="asterisk">*</span> city story</a>.</p>
      </header>
      <section className="bubble-zone">
        <dl className="bubble1 place">
        <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("stroll");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/jay-street.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Places</dd>
            <dd>Stroll along the sidewalks of pre-demolition Albany.</dd>
          </a>
        </dl>

        <dl className="bubble2 essay">
        {/* <a href="/" onClick={onSubPopLinkClick(e, "campbell")}> */}
        <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("campbell");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/NYSA_interior.jpg" alt="bubble"/></dt>
            <dd className="feature-title"><span class="asterisk">*</span>Essays</dd>
            <dd>Who Lived Here? The lives of Albany residents are revealed in photos.</dd>
          </a>
        </dl>

        <dl className="bubble3 people">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("strawn");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/jimmy-strawn.jpg" alt="bubble"/></dt>
            <dd className="feature-title"><span class="asterisk">*</span>People</dd>
            <dd>Jimmy Strawn: The Sultan of Swing</dd>
          </a>
        </dl>

        <dl className="bubble4 essay">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("rootshock");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/root-shock.jpg" alt="bubble"/></dt>
            <dd className="feature-title"><span class="asterisk">*</span>Essays</dd>
            <dd>Root Shock: Dis-PLACE-ment is a rupture of the geographic and the social</dd>
          </a>
        </dl>

        <dl className="bubble5 visual">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/demolition.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Visuals</dd>
            <dd>Watch a time-lapse video of the demolition</dd>
          </a>
        </dl>

        <dl className="bubble6 people">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/Mae-Carlson.jpg" alt="bubble"/></dt>
            <dd className="feature-title">People</dd>
            <dd>Mae Carlson: Albany's Rooming House Queen</dd>
          </a>
        </dl>

        <dl className="bubble7 gallery">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/neighborhood-map.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Galleries</dd>
            <dd>See the old neighborhoods lost to make way for the Empire State Plaza.</dd>
          </a>
        </dl>

        <dl className="bubble8 timeline">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/timeline.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Timeline</dd>
            <dd>Explore the protest events that took place in response to the proposed demolition.</dd>
          </a>
        </dl>

      </section>
    </div>
  );
} // end class


export default BubbleAlbanyLost;
