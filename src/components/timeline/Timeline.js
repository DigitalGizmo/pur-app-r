import React from 'react';
import TimelineTable from './TimelineTable';
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

        <TimelineTable
        />

      </div>
    </div>
  )
}

export default Timeline;