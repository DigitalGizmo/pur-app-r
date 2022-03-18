import React from "react"; // , {Fragment}
import "./TimelineContent";
import { yearArray, timelineContent } from "./TimelineContent";

// let yearEntry = null;

const TimelineTable = ({thrulines}) => {

  const getThrulines = (yearEntry) => {

    const thrulineImages = thrulines.map((thruline, index) => {
      if (thrulines[index]) {
        if (yearEntry.thrulines && yearEntry.thrulines.includes(index)) {
          return (
            <img
              key={index}
              className="thruline"
              src= {`http://dev.picturingurbanrenewal.org/prod-assets/timeline/thruline-${index}.gif`}
              alt={`thruline for ${index}`}/>
          )
        }
      }
      return null;
    });
    return thrulineImages;

  }

  const getTableRow = (row) => {
    const tableRow = yearArray.map((aYear) => {
      let yearEntry = row.years.find(o => o.year === aYear.toString());
      if (yearEntry) {
        const cellText = yearEntry.text.substring(0, 100);
        // const cellImage = 'row-nyc-1949';
        // const hasImage = false;
        let cellClass = "";
        if (yearEntry.hasImage) {
          if (yearEntry.hasImage === "true") {
            cellClass = row.class + "-" + aYear;
          }
        }
        return (
          <td 
            className={cellClass} 
            key={aYear}>
            {getThrulines(yearEntry)}
            <span>{cellText}</span>
          </td>
        )
      }
      return (
        <td key={aYear}>
          -
        </td>        
      )
    })
    return tableRow;
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

            {getTableRow(row)}

          </tr>
        ))}        

      </tbody>  
    </table>
  )
}

export default TimelineTable;