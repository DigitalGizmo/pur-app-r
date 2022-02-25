import React from 'react';
import { Link } from 'react-router-dom';
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

        <h4 className="ny">New York City</h4>
        <h4 className="newburgh">Newburgh</h4>
        <h4 className="kingston">Kingston</h4>
        <h4 className="albany">Albany</h4>
        <h4 className="us">NY &amp; US</h4>

        <section className="timeline-content">
          <p>timeline content goes here</p>
        </section>

      </div>
    </div>
  )
}

export default Timeline;