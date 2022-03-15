import React from "react";
import "./TimelineContent";
import { yearArray, timelineContent } from "./TimelineContent";

let yearEntry = null;

const TimelineTable = () => {

  function getTableCell (aYear, rowYears) {
    let yearEntry = rowYears.find(o => o.year === aYear.toString());
    if (yearEntry) {
      return yearEntry.text.substring(0, 100);
    }
    // } else {
    //   return "-";
    // }    
  }
  return (
    <table className="timeline-content">
      <thead>
        <tr>
          <th>&nbsp;</th>
          {yearArray.map((aYear) => (
            <th key={aYear}>{aYear}</th>
          ))}
        </tr>
      </thead> 
       
      <tbody>

        {timelineContent.map ((row) => (
          <tr className={row.class}
            key={row.class}
          >
            <th>{row.city}</th>

            {yearArray.map((aYear) => (
              <td key={aYear}>
                {getTableCell(aYear, row.years)} 
              </td>
              )
            )}
          </tr>
        ))}        

      </tbody>  
    </table>
  )
}

export default TimelineTable;