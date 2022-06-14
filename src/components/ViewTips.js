import React from 'react';

const ViewTips = ({closePop}) => {

  return (
    <div className="lightbox" onClick={closePop}>
      <div className="slimpop-wrapper tips-pop entry-pop">
        <div className="pop-nav">
          <p>
            <a
              id="close-link" 
              href="/" 
              onClick={closePop}
            >Close</a>
          </p>
        </div>

        <h3>Prototype Viewing Tips</h3>
        <p>This prototype is best viewed on a tablet, laptop or desktop computer as it has not yet been optimized for use on a smartphone. Some features may display better by resizing or adjusting the proportions of your browser window &mdash; notably the Albany City Story and the Stroll By: Gas House District features.</p>

      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default ViewTips;
