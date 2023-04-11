import React from 'react'; // , { useState, useEffect }
import ThemeCampbell from '../themes/ThemeCampbell';


const SubPopShell = ({title, onSubPopClose}) => {

  return (
    <div className="lightbox"> 
      <div className="sub-pop-wrapper sub-pop">
        <div className="pop-nav">
          <p>
            {/* <a href="/" onClick={ event => onSlidePrev(event) }>Prev</a> |  */}
            {/* <a href="/" onClick={ (event) => onSlideNext(event) }>Next</a> |  */}
            <a href="/" onClick={ event => onSubPopClose(event) }>Close</a>
          </p>
        </div>

        <ThemeCampbell        
        />

      </div>
    </div>
  );
} // end class

SubPopShell.defaultProps = {
  title: 'Title bubblePop'
};

export default SubPopShell;
















