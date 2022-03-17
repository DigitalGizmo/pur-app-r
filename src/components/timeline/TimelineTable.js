import React from "react"; // , {Fragment}
import "./TimelineContent";
import { yearArray, timelineContent } from "./TimelineContent";

let yearEntry = null;

const TimelineTable = () => {

  const getThrulines = () => {
    const thrulines = ['d']; //, 'd'
    const thrulineImages = thrulines.map((thruline) => (
      <img
        key={thruline}
        className="thruline"
        src= {`http://dev.picturingurbanrenewal.org/prod-assets/timeline/thruline-${thruline}.gif`}
        alt='thruline'/>
    ));

    return thrulineImages;
  }

  // const getTableCell = (aYear, rowYears) => {
  //   let yearEntry = rowYears.find(o => o.year === aYear.toString());
  //   if (yearEntry) {
  //     const cellText = yearEntry.text.substring(0, 100);
  //     const cellImage = 'row-nyc-1949';
  //     const hasImage = false;
  //     // if (yearEntry.hasImage) {
  //     //   con
  //     // }
  //     return (
  //       <Fragment>
  //         {getThrulines()}
  //         <span>{cellText}</span>
  //       </Fragment>
  //     )
  //   } else {
  //     return "-";
  //   }    
  // }

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
            console.log("class short name: " + row.class + "-" + aYear);
            cellClass = row.class + "-" + aYear;
          }
        }
        return (
          <td 
            className={cellClass} 
            key={aYear}>
            {getThrulines()}
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

            {/* {yearArray.map((aYear) => (
              <td className="row-nyc-1949" key={aYear}>
                {getTableCell(aYear, row.years)} 
              </td>
              )
            )} */}
          </tr>
        ))}        

      </tbody>  
    </table>
  )
}

export default TimelineTable;