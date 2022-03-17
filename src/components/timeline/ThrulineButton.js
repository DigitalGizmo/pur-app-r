import React from 'react';

const ThrulineButton = ({lineName,label,
   setThruline, thruIndex, thrulines}) => {

  return (
    <button 
      className={`${lineName}${thrulines[thruIndex] ? "-selected" : ""}`}
      onClick={() => setThruline(thruIndex)}
    >
      {label}
    </button>
  )
}

export default ThrulineButton;