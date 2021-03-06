import React from 'react';

const StrollMore = ({hotspots, highlightIndex, closeStrollMore}) => {

  return (
    <div style={{left:  (hotspots[highlightIndex].node.textPercent + 2) + '%'}}
      className="more-pop stroll" >
      <div className="slimpop-wrapper morepop-wrapper">
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
