import React from 'react';
import './StuyStroll.css';

const StrollMore = ({hotspots, highlightIndex, closeStrollMore}) => {

  return (
    <div style={{left:  (hotspots[highlightIndex].node.textPercent + 3) + '%'}}
      className="strollbox" >
      <div id="stroll-pop-wrapper">
        <p className="close">
          <a href="/" onClick={ e => { e.preventDefault(); closeStrollMore()}}>
            close
          </a>
        </p>       
        <header>
          <h1>{ hotspots[highlightIndex].node.title }</h1>

        { hotspots[highlightIndex].node.archiveItem &&
          <img 
            src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${hotspots[highlightIndex].node.archiveItem.slug}.jpg`}
            alt="tenement interior"
            width="400" height="266"
          />
        }
          <p>{ hotspots[highlightIndex].node.more }</p>
        </header>
      </div>
    </div>
  )
}

export default StrollMore;
