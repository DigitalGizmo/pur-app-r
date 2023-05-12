import React, { useState, useEffect } from 'react';

const slides = [
  { imgName: 'dauner-arch-details', 
    title: 'Thing number 1',
    caption: 'Architectural details of a building soon to be demolished for Kingston\'s Broadway East Urban Renewal Project, 1967.'
  },
  { imgName: 'dauner-1865-bldg', 
    title: 'Thing number 2',
    caption: 'The 1865 Building, 74 Broadway, before demolition.'
  },
  { imgName: 'dauner-1865-bldg-demo', 
    title: 'Thing number 3',
    caption: 'The 1865 Building being demolished.'
  },
  { imgName: 'haines-mcmillan-bldg', 
    title: 'Thing number 4',
    caption: 'Demolition of McMillan Building, Downtown Kingston, 1967.'
  },
  { imgName: 'haines-old-city-hall-pigeons', 
    title: 'Thing number 5',
    caption: 'This Bob Haines photograph accompanied an article by Kingston Daily Freeman Reporter Hugh Reynolds, March 18, 1975.'
  },
  { imgName: 'dauner-demo-scene', 
    title: 'Thing number 6',
    caption: 'Aftermath of demolition.'
  },
]

const IntroSlides = (props) => {
  const [currSlide, setCurrSlide] = useState(0);
  const numSlides = slides.length;

  useEffect(() => {
    console.log('got to useEffect: ');
  }, [currSlide]);

  // baseImagePath = 'http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/';

  const onSlimClose = event => {
    event.preventDefault();
    // console.log('close')
    props.closeSlim();
  }

  const onSlideNext = event => {
    event.preventDefault();
    if (currSlide < (slides.length - 1)) {
      setCurrSlide(currSlide + 1);
    }
  }

  const onSlidePrev = event => {
    event.preventDefault();
    if (currSlide > 0) {
      setCurrSlide(currSlide -1);
    }
  }

  return (
    <div className="lightbox"> 
      <div className="exhibit-pop-wrapper sub-pop ">
        <header>
        <div className="pop-nav">
          <p>
            {currSlide + 1} of {numSlides} |
            <a href="/" onClick={ event => onSlidePrev(event) }>Prev</a> | 
            <a href="/" onClick={ (event) => onSlideNext(event) }>Next</a> | 
            <a href="/" onClick={ event => onSlimClose(event) }>Close</a>
          </p>
        </div>

        <h3>Visual Intro: NYC A Suburb in the City</h3> {/*props.title*/}
        <h1>{slides[currSlide].title}</h1>
        <p>{slides[currSlide].caption}</p>
      </header>
        
        <img 
          src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${slides[currSlide].imgName}.jpg`}
          className="exhibit-img"
          alt='meaningful alt text'/>
      </div>
    </div>
  );
} // end class

IntroSlides.defaultProps = {
  title: 'Title sent from PersonalStory'
};

export default IntroSlides;
