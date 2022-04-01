import React from 'react';

const StuyFifteenth = ({onPageChange}) => {

  return (
    <div id="stroll-wrapper">
      <div className="intro-page">

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 2486 1479"
          preserveAspectRatio="xMidYMid meet" 
          className="svg-content"
        >

            <g id="photo">
              <image  
                  // width="2486" height="1479"
                  href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/fifteenth.jpg"  
                  transform="translate(0 0)"
                  className="intro-photo"> 
              </image>
            </g>

            <g id="turn-buttons">
              <a href="/" onClick={ e => { e.preventDefault(); onPageChange(2, 1)}}>
                <polyline className="arrows" points="2400 697 2458 745 2400 795"/>
                <text transform="translate(2300 755)" className="turn-text">start</text>
              </a>
            </g>

        </svg>

        <article className="intro-panel">
          <p>In April 1943, residents of New York&rsquo;s storied Gas House District&mdash;named for the Consolidated Edison gas works on its northwest border&mdash;learned they would soon lose their homes. Businesses, likewise, would have to move. In their place, Metropolitan Life Insurance Co. planned to build a massive new housing complex, known as Stuyvesant Town. And the corporate giant had city leaders on their side.</p>
 
          <p>Many residents and business owners fought to save their neighborhood and lost. But the district survives in photographs from the Met Life archive.</p>
 
          <p>Join us for a jaunt down 1st Avenue and around the block to 14th Street. Stop and see the sights we&rsquo;ve spotlighted along the way. Click the spotlight or the list of topics along the street to take a closer look and learn more.</p>
        </article>
      </div>
    </div>
  )
}

export default StuyFifteenth;