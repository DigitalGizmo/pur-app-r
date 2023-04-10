import React from 'react';

const HomePop = ({closePop}) => {

  return (
    <div className="lightbox" onClick={closePop}>
      <div className="slimpop-wrapper entry-pop">
        <div className="pop-nav">
          <p>
            <a
              id="close-link" 
              href="/" 
              onClick={closePop}
            >Close</a>
          </p>
        </div>

        <header>
          <h1>What Was Urban Renewal?</h1>
        </header>
 
        <article>
          <img 
            alt="some hard-wired visual?"
            src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/haines-fischer-street.jpg`}
            />

          <p>Most (but not all) renewal projects were federally funded and locally planned. Between 1949 and 1974, more than 1,250 villages, towns, and cities participated in the renewal program to the tune of $20 billion.</p>
          <p>Local governments used federal dollars to seize private property, remove residents, and demolish buildings. The goal was to sell renewal parcels to private redevelopers at a discount. City leaders hoped that new construction would reverse the downward trend in urban population and wealth. But many cities struggled to attract redevelopers.</p>
          <p>Over time, urban renewal became a source of conflict. Owners challenged the seizure of their property. Residents worried about finding new homes. Civil rights advocates opposed the destruction of Black communities. Preservationists acted to protect historic structures. Taxpayers protested rate hikes.</p>
          <p>The federal urban renewal program ended in 1974. But its legacy is still apparent if you know where to look.</p>
          <p><a href="">Learn how to research urban renewal in your community.</a></p>

        </article>
      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default HomePop;
