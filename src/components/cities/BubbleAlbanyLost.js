import React from 'react'; // , { useState, useEffect }
// import { Link } from 'react-router-dom';
// import SubPopShell from './SubPopShell';

const BubbleAlbanyLost = ({onSubPopLinkClick}) => {
  // const [subPopIsShowing, setSubPopIsShowing] = useState(false);
  // const [popToShow, setPopToShow] = useState("whammy")

  return (
    <div>
      <section className="bubble-zone">

        <header className="bubbles">
          <h1>Albany: Reaction to Redevelopment</h1>
          <p>The City sued to prevent demolition of a downtown neighborhood. But Albany residents were divided over the plan to build the Empire State Plaza.</p>
          <p>Explore the features related to this story, or link to the city story: <a href="https://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html">* Reaction to Redevelopment</a></p>
        </header>

        <dl className="bubble1 place">
        <a href="#"><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/jay-street.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Sidewalk Strolls</dd>
            <dd>Stroll Albany&apos;s sidewalks, peek inside homes and businesses that would soon be demolished</dd>
          </a>
        </dl>

        <dl className="bubble2 people">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("strawn");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/jimmy-strawn.jpg" alt="bubble"/></dt>
            <dd className="feature-title"><span class="asterisk">*</span>People</dd>
            <dd>Jimmy Strawn:<br/>The Sultan of Swing</dd>
          </a>
        </dl>

        <dl className="bubble3 essay">
          <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("rootshock");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/root-shock.jpg" alt="bubble"/></dt>
            <dd className="feature-title"><span class="asterisk">*</span>Essays</dd>
            <dd>Root Shock: Dis-PLACE-ment is a rupture of the geographic and the social</dd>
          </a>
        </dl>

        <dl className="bubble7 essay">
        <a href="/" onClick={e => { e.preventDefault(); onSubPopLinkClick("campbell");}}>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/NYSA_interior.jpg" alt="bubble"/></dt>
            <dd className="feature-title"><span class="asterisk">*</span>Essays</dd>
            <dd>Who Lived Here? The lives of Albany residents are revealed in photos.</dd>
          </a>
        </dl>

        <dl className="bubble5 visual">
          <a href="#"><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/mutin-rendering66.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Visuals</dd>
            <dd>Designing the South Mall&mdash;See the architects&apos; vision for the South Mall</dd>
          </a>
        </dl>

        <dl className="bubble6 people">
          <a href="#"><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/Mae-Carlson.jpg" alt="bubble"/></dt>
            <dd className="feature-title">People</dd>
            <dd>Mae Carlson: Albany&apos;s Rooming House Queen</dd>
          </a>
        </dl>

        <dl className="bubble4 gallery">
          <a href="#"><span className="not-done">Not yet implemented</span>
            <dt><img src="http://dev.picturingurbanrenewal.org/prod-assets/city-stories/demo.jpg" alt="bubble"/></dt>
            <dd className="feature-title">Exhibits</dd>
            <dd>The Demolition and Reconstruction of Albany&apos;s South Mall area</dd>
          </a>
        </dl>

        <dl className="bubble8 timeline">
          <a href="#">
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
