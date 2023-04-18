import React, { useState } from 'react'; // , { useState, useEffect }
// import { Link } from 'react-router-dom';
import BubbleAlbanyLost from './BubbleAlbanyLost';
import BubbleNYCLost from './BubbleNYCLost'
import SubPopShell from './SubPopShell';

const PopShell = ({bubblesToShow, onPopClose}) => {
    const [subPopIsShowing, setSubPopIsShowing] = useState(false);
    const [popToShow, setPopToShow] = useState("whammy")

    const whichBubbles = (_bubblesToShow) => {
      switch(_bubblesToShow) {
        case "albany-lost":
          return  <BubbleAlbanyLost onSubPopLinkClick={onSubPopLinkClick} />
        case "nyc-lost":
          return  <BubbleNYCLost onSubPopLinkClick={onSubPopLinkClick}/>
        default:
          return <div>bubble name not found</div>
      }
    }
  

    const onSubPopLinkClick = (popName) => {
      // event.preventDefault();
      setPopToShow(popName)
      setSubPopIsShowing(true);
    }
    
    const onSubPopClose = (event) => {
      event.preventDefault();
      setSubPopIsShowing(false);
    }
  
    return (
    <div className="city-lightbox"> 
      {/* <div className="city-pop-wrapper entry-pop"> */}
      <div className="city-pop">
        <div className="pop-nav">
          <p>
            <a href="/" onClick={ event => onPopClose(event) }>Close</a>
          </p>
        </div>

        {whichBubbles(bubblesToShow)}
        {/* <BubbleAlbanyLost
          onSubPopLinkClick={onSubPopLinkClick}
        /> */}

        {subPopIsShowing && 
          <SubPopShell
            popName={popToShow}
            onSubPopClose = {onSubPopClose}
        />}

      </div>
    </div>
  );
} // end class

PopShell.defaultProps = {
  title: 'Title for this city'
};

export default PopShell;
















