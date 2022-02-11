import React from 'react';
import './StuyStroll.css';

const Hotspots = ({hotspots}) => {

  const hotspotElements = hotspots.map((hotspot, index) => {
    return (
      <g
        key = {index}
      >
      <circle        
        className="low-spot hi-spot" 
        cx={hotspot.node.hotspotX}
        cy={hotspot.node.hotspotY}
        r={hotspot.node.hotspotR}
      />

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

  //   <g v-else-if="hotspots" id="hilites" >

  //   <g 
  //     v-for="(hotspot, index) of hotspots"
  //     :key="index"
  //     @mouseover="hoverThis(index)"
  //     @mouseleave="unHoverThis(index)"
  //   >
  //     <circle        
  //       class="low-spot" 
  //       :class="{'hi-spot': hilites[index] }"
  //       :cx="hotspot.hotspot_x" 
  //       :cy="hotspot.hotspot_y" 
  //       :r="hotspot.hotspot_r"
  //     />

  //     <g v-if="hilites[4]">
  //       <image  
  //           width="400" height="400" 
  //           xlink:href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/penny-scale.png"  
  //           transform="translate(1900 1010)"> <!-- 2100 1210 -->
  //       </image>
  //     </g>

  //   </g> <!-- end for -->
  // </g> <!-- end if -->
