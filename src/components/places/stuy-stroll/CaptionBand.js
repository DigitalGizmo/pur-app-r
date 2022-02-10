import React from "react";
import "./StuyStroll.css";

const CaptionBand = ({loading, error, hotspots, captionWidth}) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  // hotspots = 
  // {data.interactive.interactiveParts.edges[1].node.hotspots.edges}
  const captions = 
    hotspots.map((hotspot) => {
    return (
      <div
        key={hotspot.node.title}
        className="cap"
        style={{ left: hotspot.node.textPercent + '%' }}
      >
        <h4>{hotspot.node.title}</h4>
        <p>{hotspot.node.blurb}
          more..
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