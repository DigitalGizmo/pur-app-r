import React from "react";
import "./TimelineContent";
import { timelineContent } from "./TimelineContent";
import './TempTable.css';


const TimelineTable = () => {

  return (
    <table className="temp">
      <row>
        <td>City</td>
        {timelineContent[0].years.map((head) => (
          <td>{head.year}</td>
        ))}
      </row>
      {timelineContent.map ((row) => (
        <row className="temp">
          <td>{row.city}</td>
          {row.years.map((content) => (
          <td>{content.text}</td>
        ))}
        </row>
      ))}
    </table>
  )

}

export default TimelineTable;