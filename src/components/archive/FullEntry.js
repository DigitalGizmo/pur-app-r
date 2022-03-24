import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const FullEntry = ({images, currIndex,
    closeFullEntry, nextEntry, prevEntry}) => {

  // // Prevent click on FullEntry from closing window
  // const handleClick = event => {
  //   event.stopPropagation();

  // }

  return (
    <div className="lightbox" onClick={closeFullEntry}>
      <div className="slimpop-wrapper entry-pop">
        <div className="pop-nav">
          <p>
            <a href="/" onClick={prevEntry}>Prev</a> |
            <a href="/" onClick={nextEntry}>Next</a> | 
            <a
              id="close-link" 
              href="/" onClick={closeFullEntry}
            >Close</a>
          </p>

          <dl>
          {/* if there is a street address */}
          { images[currIndex].streetAddress &&
            <Fragment>
              <dt>Location:</dt> 
              <dd>{ images[currIndex].streetAddress }, { images[currIndex].city.title }</dd>
            </Fragment>
          }
          {/* No street address, so just city */}
          { !images[currIndex].streetAddress &&
            <Fragment>
              <dt>Location:</dt> 
              <dd>{ images[currIndex].city.title }</dd>
            </Fragment>
          }
          { images[currIndex].district &&
            <Fragment>
              <dt>District:</dt> 
              <dd>{ images[currIndex].district.title }</dd>
            </Fragment>          
          }

            <dt>Date:</dt>
            <dd>{ images[currIndex].creationYear }</dd>

            <dt>Source:</dt>
            <dd>{ images[currIndex].source.title }</dd>
          </dl>
        </div>

        <header>
        <h1>{ images[currIndex].title }</h1>
        <p>{ images[currIndex].description }</p>

        {images[currIndex].usedIn &&
          <p>Jump to this image in: <Link to={`../../${images[currIndex].usedIn}`}>
            {images[currIndex].usedInTitle}</Link> 
          </p>
        }
        </header>

        <img 
          alt={images[currIndex].description}
          src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${images[currIndex].slug}.jpg`}
          />
      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default FullEntry;

