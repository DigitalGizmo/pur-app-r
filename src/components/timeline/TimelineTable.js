import React from "react";
import "./TimelineContent";
import { years, timelineContent } from "./TimelineContent";
import './Timeline.css';

const TimelineTable = () => {

  return (
    <table className="timeline-content">
      <thead>
        <tr>
          <th>&nbsp;</th>
          {years.map((year) => (
          <th>{year}</th>
        ))}
        </tr>
      </thead> 
       
      <tbody>

        {timelineContent.map ((row) => (
          <tr className="row-nyc">
            <th>{row.city}</th>
            {row.years.map((content) => (
              <td>{content.text}</td>
            ))}
          </tr>
        ))}        

      </tbody>  
    </table>
  )
}

export default TimelineTable;