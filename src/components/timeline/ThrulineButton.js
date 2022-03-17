import React from 'react';

const ThrulineButton = ({subclass,label,
   setThruline, thruIndex, thrulines}) => {

  return (
    <button 
      className={`button ${subclass} ${thrulines[thruIndex] ? "selected" : ""}`}
      onClick={() => setThruline(thruIndex)}
    >
      {label}
    </button>
  )
}

export default ThrulineButton;