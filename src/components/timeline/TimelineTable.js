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

      {/* <row>
        <td>City</td>
        {timelineContent[0].years.map((head) => (
          <td>{head.year}</td>
        ))}
      </row> */}
      {/* {timelineContent.map ((row) => (
        <row className="temp">
          <td>{row.city}</td>
          {row.years.map((content) => (
          <td>{content.text}</td>
        ))}
        </row>
      ))} */}
    </table>
  )

}

export default TimelineTable;