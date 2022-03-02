import React from "react";
import "./TimelineContent";
import { yearArray, timelineContent } from "./TimelineContent";
import './Timeline.css';

let yearEntry = null;

const TimelineTable = () => {

  return (
    <table className="timeline-content">
      <thead>
        <tr>
          <th>&nbsp;</th>
          {yearArray.map((aYear) => (
            <th>{aYear}</th>
          ))}
        </tr>
      </thead> 
       
      <tbody>

        {timelineContent.map ((row) => (
          <tr className={row.class}>
            <th>{row.city}</th>

            {yearArray.map((aYear) => {
              // Note bracket above rather than paren - enables function
              // See if there's an entry for this year
              if (yearEntry = row.years.find(o => o.year === aYear.toString())) {
                return <td>{yearEntry.text}</td>
              } else {
                return <td>-&nbsp;</td>
              }    
            })}
          </tr>
        ))}        

      </tbody>  
    </table>
  )
}

export default TimelineTable;