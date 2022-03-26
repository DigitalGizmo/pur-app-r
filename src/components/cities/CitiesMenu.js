import React from 'react';
// import { Link } from 'react-router-dom';

const CitiesMenu = () => {
  return (
    <div className="short-page">
      <header className="basic-page">
        <h1>4 Cities / 4 Stories</h1>
      </header>
      <ul className="list-menu">
        <li><a href="http://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html">Albany: Lost Places/Displaced People - The Reaction to Redevelopment</a></li>
      </ul>


      <iframe 
        style={{border: `1px solid rgba(0, 0, 0, 0.1)`}} 
        width="640" height="480" 
        src="https://framer.com/embed/Scroll-Trigger-Hopefully--hbA7M8KLJF1SERQjjP4i/IrcEX2DOx?highlights=0" 
        >
      </iframe>



    </div>
  )
}

export default CitiesMenu;