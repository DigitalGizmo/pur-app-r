import React from 'react';
import { Link } from 'react-router-dom';

const MoreTime = ({closeMore, yearEntry}) => {

  return (
    <div className="more-pop timeline" >
      <div className="slimpop-wrapper morepop-wrapper">
        <p className="close">
          <a 
          href="/" 
          id="close-link"
          onClick={ event => { closeMore(event)}}>
            close
          </a>
        </p>       
        <header>
          {/* <h1>[we have no data for title]</h1> */}

          {yearEntry.node.usedIn &&
            <p>Jump to this image in: <Link to={`../../${yearEntry.node.usedIn}`}>
            {yearEntry.node.usedInTitle}</Link> 
            </p>
          }

          <p>{yearEntry.node.moreText}</p>

          { yearEntry.node.hasCellImage &&
          <img 
            src={`http://dev.picturingurbanrenewal.org/prod-assets/timeline/nyc-1960.jpg`}
            alt="tenement interior"
            width="400" height="266"
          />
        }

        </header>
      </div>
    </div>
  )
}

export default MoreTime