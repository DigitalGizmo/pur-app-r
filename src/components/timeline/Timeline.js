import React, { useState } from 'react';
import TimelineTable from './TimelineTable';

const Timeline = () => {
  const BASE_THRULINES = [
    true, false, false, true, true, false, true, false, 
  ];
  /*
  * 0 U Planning, 1 D Demo, 2 H Housing, 3 R Reconstruction, 
  * 4 P Preservation, 5 O Protest, 6 C CivilRights, 7 M PublicRelations
  */
  const [thrulines, setThrulines] = useState(BASE_THRULINES);

  return (
    <div> 
      <header className="basic-page">
        <h1>Timeline</h1>
      </header>

      <div className="timeline-page">

        <section className="thru-lines">
          <ul>
            <li className="title">Through Lines</li>
            <li><button className="button urban">Urban Planning</button></li>
            <li><button className="button demo-selected">Demolition and Displacement</button></li>
            <li>Housing</li>
            <li>Reconstruction</li>
            <li>Preservation</li>
            <li>Protest</li>
            <li>Civil Rights</li>
            <li>Support for Urban Renewal</li>
          </ul>
        </section>

        <TimelineTable
          thrulines = {thrulines}
        />

        {/* <iframe 
          style={{border: `1px solid rgba(0, 0, 0, 0.1)`}}  
          width="1400" height="1000" 
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXBfNOWDi9ewcaKrJv0Lv4q%2FTimeline%3Fnode-id%3D2%253A2%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2" 
          allowFullScreen>
        </iframe> */}

      </div>
    </div>
  )
}

export default Timeline;