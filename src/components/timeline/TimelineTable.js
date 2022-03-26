import React from 'react'; // , { useState }

const TimelineTable = ({thrulines, loading, error, 
  timelineLayers, showMore, closeMore}) => {
  const yearArray = [
    // 1943, 1944, 1945, 1946, 1947, 1948, 1949, 
    // 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 
      1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 
      1967, 1968]
  
  // const [showingMore, setShowingMore] = useState(false);

  const getThrulines = (yearEntry) => {
    // Getting highlight lines for this one cell, if there are any
    // Also handling dimmed state for this cell
    const isEmpty = thrulines.every(value => value === false);
    let cellClass = " dim";
    if (isEmpty) {
      cellClass = "";
    } // else { // Thrulines active, so default is dim
    //   let cellClass = " dim";
    // }
    const thrulineImages = thrulines.map((thruline, index) => {
      if (thrulines[index]) { // This thruline is activate
        // If there are _any_ throughline entries for this cell
        if (yearEntry.node.thrulines.edges.length > 0) {
          // See if this cell has an id for this throughline
          let hasMatchingOrdinal = false;
          // console.log("1st ordingal: " + yearEntry.node.thrulines.edges[0].node.ordinal);

          for (let tlIndex = 0; tlIndex < yearEntry.node.thrulines.edges.length; tlIndex++) {
            if (yearEntry.node.thrulines.edges[tlIndex].node.ordinal === index) hasMatchingOrdinal = true;
          }

          if (hasMatchingOrdinal) {
            cellClass = "";
            return (
              <img
                key={index}
                className="thruline"
                src= {`http://dev.picturingurbanrenewal.org/prod-assets/timeline/thruline-${index}.gif`}
                alt={`thruline for ${index}`}/>
            )
          } // else  There wasn't a match - leave default dim

        } // else  No throughline entries for this cell, leave dim

      } // End going through thrulines
      return null; // This null is just for the hightlight images
    });
    
    return [thrulineImages, cellClass];
  }

  const getEmptyCellClass = () => {
    // Dim if any throughlines are chosen
    let emptyCellClass = "";
    // Abandoing dim effort for now
    const isEmpty = thrulines.every(value => value === false);
    if (!isEmpty) { // some throughlines active
      emptyCellClass = " dim";
    }
    return emptyCellClass;
  }
  
  const getMoreLink = (yearEntry, rowSlug) => {
    // let moreLink = "";
    if (yearEntry.node.hasMore) {
      return (
        <span>
          <a
            className = ""
            href="/"
            onClick={(event) => showMore(event, yearEntry, rowSlug)}
          >
          More..
          </a>
        </span>
      )
    }
    return "";
  }

  const getTableRow = (row) => {
    const tableRow = yearArray.map((aYear) => {
      let yearEntry = row.node.timelineEntries.edges.find(edge => edge.node.year === aYear);
      if (yearEntry && 
        // For some reason graphene is returning e.g. A_3 for priority
          parseInt(yearEntry.node.priority.substring(2)) > 2 ) {
        const cellText = yearEntry.node.blurb;
        // Abandoning dim effort for now
        let cellClass = getThrulines(yearEntry)[1]; 
        // let cellClass = "";
        // May need css for background image
        if (yearEntry.node.hasCellImage) {
            cellClass += " row-" + row.node.slug + "-" + aYear;
        }
        return (
          <td 
            className={cellClass}
            key={aYear}
          >
            {getThrulines(yearEntry)[0]}
            <span>{cellText}</span>
            {getMoreLink(yearEntry, row.node.slug)}
          </td>
        )
      }
      return (
        <td 
          key={aYear}
          className={getEmptyCellClass()}
          >        
        </td>        
      )
    })
    return tableRow;
  }

  return (
    <table 
      className="timeline-content"
      // onClick={ event => { closeMore(event)}}
    >
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