import React from 'react'; // , { useState, useEffect }
import ThemeCampbell from '../themes/ThemeCampbell';
import PersonalStoryJS from '../people/PersonalStoryJS'
import StuyStroll from '../places/stuy-stroll/StuyStroll'
import ThemeFullilove from '../themes/ThemeFullilove';
import ThemeZipp from '../themes/ThemeZipp';
import CityIntroNyc from './CityIntroNyc';


const SubPopShell = ({popName, onSubPopClose}) => {

  const whichPop = (popName) => {
    switch(popName) {
      case "campbell":
        return  <ThemeCampbell isSubPop = {true}/>
      case "strawn":
        return  <PersonalStoryJS isSubPop = {true}/>
      case "stroll":
        return  <StuyStroll isSubPop = {true}/>
      case "theme-zipp":
        return  <ThemeZipp isSubPop = {true}/>
      case "rootshock":
        return  <ThemeFullilove isSubPop = {true}/>
      case "intro-nyc":
        return  <CityIntroNyc isSubPop = {true}/>
      default:
        return <div>pop name not found</div>
    }
  }

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

        {whichPop(popName)}
        {/* {popName === "campbell" ?
          <ThemeCampbell        
            isSubPop = {true}
          />
        :
          <div>Nobody home</div>
        } */}

      </div>
    </div>
  );
} // end class

SubPopShell.defaultProps = {
  title: 'Title bubblePop'
};

export default SubPopShell;
















