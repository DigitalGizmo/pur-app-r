import React from 'react';
import './FullEntry.css';

const FullEntry = ({images, currIndex,
    closeFullEntry, nextEntry, prevEntry}) => {

  return (
    <div className="lightbox" onClick={closeFullEntry}>
      <div className="slimpop-wrapper entry-pop">
        <p className="close">
          <a href="/" onClick={prevEntry}>Prev</a> |
          <a href="/" onClick={nextEntry}>Next</a> | 
          <a href="/" onClick={closeFullEntry}>Close</a>
        </p>

        <header>
          <h1>{ images[currIndex].title }</h1>
          <p>{ images[currIndex].description }</p>
          { images[currIndex].streetAddress &&
            <p>location: 
              { images[currIndex].streetAddress }, { images[currIndex].city.title }
            </p>
          }
          { !images[currIndex].streetAddress &&
            <p>location: { images[currIndex].city.title }</p>
          }
          { images[currIndex].district.title &&
            <p>district: { images[currIndex].district.title }</p>
          }
          <p>date: { images[currIndex].creationYear }</p>
          <p>Courtesy of { images[currIndex].source.title }</p>
        </header>


        <img 
          className="fullpic" 
          src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${images[currIndex].slug}.jpg`}
          />
      </div> {/* /#slippop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default FullEntry;

