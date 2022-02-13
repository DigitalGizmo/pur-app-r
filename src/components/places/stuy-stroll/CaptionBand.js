import React from "react";
import "./StuyStroll.css";

const CaptionBand = ({loading, error, hotspots, captionWidth, 
    highlights, hoverSpot, unHoverSpot, showStrollMore}) => {

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
        <h4>{hotspot.node.title}</h4>
        <p>{hotspot.node.blurb} <a 
            onClick={ e => { e.preventDefault(); showStrollMore(index)}}
            href="/">more...</a>
        </p>

      </div>
    )
  });

  return (
    <div 
      id="caption-band"
      style ={{ width: `${captionWidth}px` }}  
    >
      { captions }
    </div> 
  );
}

export default CaptionBand;