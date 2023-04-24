import React from 'react';

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

        <h3>Prototype Viewing Tips</h3>
        <p>This prototype is best viewed on a tablet, laptop or desktop computer as it has not yet been optimized for use on a smartphone. Some features may display better by resizing or adjusting the proportions of your browser window &mdash; notably the Albany City Story and the Stroll By: Gas House District.</p>
        <p>Working links are indicated with an orange asterisk<span class="asterisk">*</span>; inks that are not yet implemented will display a tooltip to that effect.</p>
        <p>The features below can be viewed outside the context of the prototype:
          <ul>
          <li>Places: Kingston: Best Laid Plans</li>
          <li>Places: Newburgh From The Planner's Perspective</li>
          <li>People: Bob Haines & Gene Dauner: One Step Ahead Of The Wrecking Ball</li>
          <li>People: Joseph Y. Resnick, I’m For Joe</li>
          <li>People: George M. Raymond, A Passionate Believer In Cities</li>
          <li>People: Carrie Wilson, Contract Buyer</li>
          <li>People: George M. Raymond, A Passionate Believer In Cities</li>
          <li>Essay: Buyer Beware: Contract Sales</li>
          <li>Essay: Root Shock</li>
        </ul>
      </p>

      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default ViewTips;
