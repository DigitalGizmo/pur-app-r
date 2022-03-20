import React from "react"; 

const TimelineTable = ({thrulines, loading, error, timelineLayers}) => {
  const yearArray = [
    // 1943, 1944, 1945, 1946, 1947, 1948, 1949, 
    // 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 
      1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 
      1967, 1968]

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

          // ack! Don't directly have an array!
          // for (let item in yearEntry.node.thrulines.edges) {
          //   if (item.node.ordinal === index) hasMatchingOrdinal = true;
          // }
          /*
          * let's say that on this iteration we have a true for 5
                    "hasCellImage": false,
                    "thrulines": {
                      "edges": [                        {
                          "node": {
                            "slug": "housing",
                            "ordinal": 2
                          }
                        },
                        {
                          "node": {
                            "slug": "protest",
                            "ordinal": 5
                          }
          * Brute force
          */
          // yearEntry.thrulines.includes(index)) {

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