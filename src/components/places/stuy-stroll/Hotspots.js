import React from 'react';

const Hotspots = ({hotspots, highlights, hoverSpot, unHoverSpot}) => {

  const hotspotElements = hotspots.map((hotspot, index) => {
    let zoomRadius = hotspot.node.hotspotR * (hotspot.node.zoomPercent / 100)
     return (
      <g
        key = {index}
        onMouseOver={() => hoverSpot(index)}
        onMouseLeave={unHoverSpot}
      >
        <circle        
          className={`low-spot ${highlights[index] ? "hi-spot" : ""} `} 
          cx={hotspot.node.hotspotX}
          cy={hotspot.node.hotspotY}
          r={hotspot.node.hotspotR}
        />
        { highlights[index] && hotspot.node.slug &&
          <g>
            <image  
              width={zoomRadius * 2} 
              height={zoomRadius * 2}  
              href={`http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/zoompics/${hotspot.node.slug}.png`}  
              transform={`translate(
                ${hotspot.node.hotspotX - zoomRadius} 
                ${hotspot.node.hotspotY - zoomRadius}
                )`}>
            </image>
          </g>     
        }
      </g>      
    )
  }); 

  return (
    <g id="hilights">
      { hotspotElements }
    </g>
  );
}

export default Hotspots;
