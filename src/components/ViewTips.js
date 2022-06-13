import React from 'react';

const ViewTips = ({closePop}) => {

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
          <h2>Prototype Viewing Tips</h2>
        </header>
 
        <article>
          <p>This prototype is best viewed on a tablet, laptop or desktop computer, not a smartphone. Some features may require resizing your browser window for optimal viewing — notably the Albany City Story and the Stroll By: Gas House District features.</p>

        </article>
      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default ViewTips;
