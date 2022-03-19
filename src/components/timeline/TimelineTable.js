import React from "react"; // , {Fragment}
import "./TimelineContent";
import { yearArray } from "./TimelineContent"; //, timelineContent

const TimelineTable = ({thrulines, loading, error, timelineLayers}) => {

  // const getThrulines = (yearEntry) => {

  //   const thrulineImages = thrulines.map((thruline, index) => {
  //     if (thrulines[index]) {
  //       if (yearEntry.thrulines && yearEntry.thrulines.includes(index)) {
  //         return (
  //           <img
  //             key={index}
  //             className="thruline"
  //             src= {`http://dev.picturingurbanrenewal.org/prod-assets/timeline/thruline-${index}.gif`}
  //             alt={`thruline for ${index}`}/>
  //         )
  //       }
  //     }
  //     return null;
  //   });
  //   return thrulineImages;

  // }

  const getTableRow = (row) => {
    const tableRow = yearArray.map((aYear) => {
      let yearEntry = row.node.timelineEntries.edges.find(edge => edge.node.year === aYear);
      if (yearEntry) {
        const cellText = yearEntry.node.blurb;
        let cellClass = "";
        if (yearEntry.node.hasCellImage) {
            cellClass = "row-" + row.node.slug + "-" + aYear;
        }
        return (
          <td 
            className={cellClass} 
            key={aYear}>
            {/* {getThrulines(yearEntry)} */}
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

        {timelineLayers.map ((row) => (
          <tr className={`row-${row.node.slug}`}
            key={row.node.slug}
          >
            <th>{row.node.title}</th>

            {getTableRow(row)}

          </tr>
        ))}        

      </tbody>  
    </table>
  )
}

export default TimelineTable;