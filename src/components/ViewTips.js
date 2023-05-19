import React from 'react';
import { Link } from 'react-router-dom';

const ViewTips = ({closePop}) => {

  return (
    <div className="lightbox" onClick={closePop}>
      <div className="slimpop-wrapper tips-pop entry-pop">
        <div className="pop-nav">
          <p>
            <a
              id="close-link" 
              href="/" 
              onClick={closePop}
            >Close</a>
          </p>
        </div>

        <h3>Viewing This Prototype</h3>
        <p>Working links are indicated with an orange asterisk<span class="asterisk">*</span>;</p>
        <p>Links that are not yet implemented will display a tooltip to that effect.</p>
        <p>This prototype is best viewed on a tablet, laptop or desktop computer as it has not yet been optimized for viewing on a smartphone. Some features may display better by resizing or adjusting the proportions of your browser window &mdash; notably the Albany City Story and the Stroll By: Gas House District.</p>
        <p>The features below can be viewed outside the context of the prototype:
          <ul>
          <li>Sidewalk Stroll: <Link to="/places/stuy-stroll">The Gas House District</Link> (full screen version)</li>
          <li>City Story: <Link to="/places/newburgh">Newburgh From The Planner's Perspective</Link>; (NB: this is a partial City Story)</li>
          <li>People: <Link to="/people/haines-dauner">Bob Haines & Gene Dauner: One Step Ahead Of The Wrecking Ball</Link></li>
          <li>People: <Link to="/people/joseph-resnick">Joseph Y. Resnick, I’m For Joe</Link></li>
          <li>People: <Link to="/people/george-raymond">George M. Raymond, A Passionate Believer In Cities</Link></li>
          <li>People: <Link to="/people/carrie-wilson">Carrie Wilson, Contract Buyer</Link></li>
        </ul>
      </p>

      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default ViewTips;
