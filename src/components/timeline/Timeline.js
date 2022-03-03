import React from 'react';
// import TimelineTable from './TimelineTable';
import './Timeline.css';

const Timeline = () => {
  return (
    <div> 
      <header className="basic-page">
        <h1>Timeline</h1>
      </header>

      <div className="timeline-page">

        <section className="thru-lines">
          <ul>
            <li className="title">Through Lines</li>
            <li>Urban Planning</li>
            <li>Demolition and Displacement</li>
            <li>Housing</li>
            <li>Reconstruction</li>
            <li>Preservation</li>
            <li>Protest</li>
            <li>Civil Rights</li>
            <li>Support for Urban Renewal</li>
          </ul>
        </section>

        {/* <TimelineTable
        /> */}

        <iframe 
          style={{border: `1px solid rgba(0, 0, 0, 0.1)`}}  
          width="1400" height="1000" 
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXBfNOWDi9ewcaKrJv0Lv4q%2FTimeline%3Fnode-id%3D2%253A2%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2" 
          allowFullScreen>
        </iframe>

      </div>
    </div>
  )
}

export default Timeline;