import React, { useState } from 'react';

const TimelineTable = ({thrulines, loading, error, 
  timelineLayers}) => {
  const yearArray = [
    // 1943, 1944, 1945, 1946, 1947, 1948, 1949, 
    // 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 
      1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 
      1967, 1968]
  
  // const [priorityLevel, setPriorityLevel] = useState(3);

  const getThrulines = (yearEntry) => {

    const thrulineImages = thrulines.map((thruline, index) => {
      // True if throughline is activated by its button
      if (thrulines[index]) {
        // If there are any throughline entries at all
        if (yearEntry.node.thrulines.edges.length > 0) {
          let hasMatchingOrdinal = false;
          // console.log("1st ordingal: " + yearEntry.node.thrulines.edges[0].node.ordinal);

          for (let tlIndex = 0; tlIndex < yearEntry.node.thrulines.edges.length; tlIndex++) {
            if (yearEntry.node.thrulines.edges[tlIndex].node.ordinal === index) hasMatchingOrdinal = true;
          }

          if (hasMatchingOrdinal) {
            return (
              <img
                key={index}
                className="thruline"
                src= {`http://dev.picturingurbanrenewal.org/prod-assets/timeline/thruline-${index}.gif`}
                alt={`thruline for ${index}`}/>
            )
          }
        }
      }
      return null;
    });
    return thrulineImages;
  }

  const getTableRow = (row) => {
    const tableRow = yearArray.map((aYear) => {
      let yearEntry = row.node.timelineEntries.edges.find(edge => edge.node.year === aYear);
      // For some reason graphene is returning e.g. A_3 for priority
      if (yearEntry && 
          parseInt(yearEntry.node.priority.substring(2)) > 2 ) {
        const cellText = yearEntry.node.blurb;
        let cellClass = "";
        if (yearEntry.node.hasCellImage) {
            cellClass = "row-" + row.node.slug + "-" + aYear;
        }
        return (
          <td 
            className={cellClass} 
            key={aYear}>
            {getThrulines(yearEntry)}
            <span>{} - {cellText}</span>
          </td>
        )
      }
      return (
        <td key={aYear}>
          
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
        {/* <tr>
          <td onClick={setPriorityLevel(3)} >Show only level 3</td>
          <td onClick={setPriorityLevel(2)} >Show 2 and 3</td>
 
        </tr>       */}

      </tbody>  
    </table>
  )
}

export default TimelineTable;