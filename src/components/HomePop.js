import React from 'react';

const HomePop = ({closeHomePop}) => {

  return (
    <div className="lightbox" onClick={closeHomePop}>
      <div className="slimpop-wrapper entry-pop">
        <div className="pop-nav">
          <p>
            <a
              id="close-link" 
              href="/" 
              onClick={closeHomePop}
            >Close</a>
          </p>
        </div>

        <header>
          <h1>Intro</h1>
          <p>some content</p>
        </header>

        <img 
          alt="some hard-wired visual?"
          src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/dauner-arch-details.jpg`}
          />
      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default HomePop;
