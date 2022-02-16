import React from "react";
import StrollMore from './StrollMore';
import "./StuyStroll.css";

const CaptionBand = ({loading, error, hotspots, captionWidth, 
    highlights, hoverSpot, unHoverSpot, showStrollMore,
    highlightIndex, closeStrollMore, isMoreShowing}) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  // hotspots = 
  // {data.interactive.interactiveParts.edges[1].node.hotspots.edges}
  const captions = 
    hotspots.map((hotspot, index) => {
    return (
      <div
        key={hotspot.node.title}
        className={`cap ${highlights[index] ? "hi-text" : ""} `}
        style={{ left: hotspot.node.textPercent + '%' }}
        onMouseOver={() => hoverSpot(index)}
        onMouseLeave={unHoverSpot}
      >
        <h4>
          <a href="/"
            onClick={ e => { e.preventDefault(); showStrollMore(index)}}>
            {hotspot.node.title}
          </a>
        </h4>
        <p>{hotspot.node.blurb}</p>
      </div>
    )
  });

  return (
    <div 
      id="caption-band"
      style ={{ width: `${captionWidth}px` }}  
    >
      { captions }


      { isMoreShowing &&
        <StrollMore
          hotspots = {hotspots}
          highlightIndex = {highlightIndex}
          closeStrollMore = {closeStrollMore}
        >
        </StrollMore>
      }


    </div> 
  );
}

export default CaptionBand;