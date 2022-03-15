import React from 'react';

const FullEntry = ({images, currIndex,
    closeFullEntry, nextEntry, prevEntry}) => {

  // // Prevent click on FullEntry from closing window
  // const handleClick = event => {
  //   event.stopPropagation();

  // }

  return (
    <div className="lightbox" onClick={closeFullEntry}>
      <div className="slimpop-wrapper entry-pop">
        <p className="pop-nav">
          <a href="/" onClick={prevEntry}>Prev</a> |
          <a href="/" onClick={nextEntry}>Next</a> | 
          <a
            id="close-link" 
            href="/" onClick={closeFullEntry}
          >Close</a>
        </p>

        <header>
          <h1>{ images[currIndex].title }</h1>
          <p>{ images[currIndex].description }</p>
          { images[currIndex].streetAddress &&
            <p>Location: 
              { images[currIndex].streetAddress }, { images[currIndex].city.title }
            </p>
          }
          { !images[currIndex].streetAddress &&
            <p>Location: { images[currIndex].city.title }</p>
          }
          { images[currIndex].district &&
            <p>District: { images[currIndex].district.title }</p>
          }
          <p>Date: { images[currIndex].creationYear }</p>
          <p>Source: { images[currIndex].source.title }</p>
        </header>


        <img 
          className="fullpic" 
          alt={images[currIndex].description}
          src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${images[currIndex].slug}.jpg`}
          />
      </div> {/* /#slippop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default FullEntry;

