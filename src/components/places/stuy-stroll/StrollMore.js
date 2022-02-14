import React from 'react';
import './StuyStroll.css';
import './StrollMore.css';

const StrollMore = ({hotspots, highlightIndex, closeStrollMore}) => {

  return (
    <div style={{left:  hotspots[highlightIndex].node.textPercent + '%'}}
      className="strollbox" >
      <div id="stroll-pop-wrapper" className="entry-pop">
        <p className="close">
          <a href="/" onClick={ e => { e.preventDefault(); closeStrollMore()}}>
            close
          </a>
        </p>       
        <header>
          <h1>{ hotspots[highlightIndex].node.title }</h1>
          <p>{ hotspots[highlightIndex].node.more }</p>
        </header>
        { highlightIndex===8 &&
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/morepics/james-strawn-600.jpg"
            alt="tenement interior"
            width="400" height="266"
          />
        }

      </div>
    </div>
  )
}

export default StrollMore;
