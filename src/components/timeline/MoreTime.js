import React from 'react';
import { Link } from 'react-router-dom';

const MoreTime = ({closeMore, yearEntry, rowSlug}) => {
  const getJumpToLink = () => {
    if (yearEntry.node.usedIn) {
      if (yearEntry.node.usedIn.substring(0,4) === "http") {
        // We have a full, absolute url
        return (
          <a
            href={yearEntry.node.usedIn}
          >{yearEntry.node.usedInTitle}</a>
        )
      }
      return (
        <Link to={`../../${yearEntry.node.usedIn}`}>
            {yearEntry.node.usedInTitle}</Link>
      )
    }
    return null;
  }

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

          {getJumpToLink() &&
            <p>Jump to this image in: {getJumpToLink()}
            </p>
          }

          <p>{yearEntry.node.moreText}</p>

          { yearEntry.node.hasCellImage &&
          <img 
            src={`http://dev.picturingurbanrenewal.org/prod-assets/timeline/${rowSlug}-${yearEntry.node.year}.jpg`}
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