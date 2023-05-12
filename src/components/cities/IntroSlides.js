import React, { useState, useEffect } from 'react';

const slides = [
  { imgName: '01-gasworks', 
    title: 'The Gas House District',
    caption: '\“The old Gas House District of the lower East Side, famed in song and story and known two generations ago as one of the toughest neighborhoods in New York, soon will be little more than a memory. The heart of the old waterfront community has been acquired by the Metropolitan Life Insurance Company to provide a site for a modern housing center.\” (New York Times, 1944)'
  },
  { imgName: '02-peddler', 
    title: 'Home to European Immigrants',
    caption: 'By 1940, the Gas House District was less tough and more respectable. It was a place where European immigrants settled before moving on to more prosperous neighborhoods. Italians, Poles, Russians, Austrians, Germans, and Hungarians all made their homes there.'
  },
  { imgName: '03-moses', 
    title: 'Slum Clearance',
    caption: 'The plan to raze the Gas House District originated with Robert Moses. New York City\’s powerful Planning Commissioner described the area as a \“slum.\” In its place, he proposed to build middle-class housing. '
  },
  { imgName: '04-model', 
    title: 'Private-Public Partnership',
    caption: 'In 1943, MetLife agreed to build Stuyvesant Town. In return, city officials promised the insurance giant a 25-year tax reduction. This deal ensured a long-term and steady return on investment.'
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
      <div className="exhibit-pop-wrapper sub-pop">
        <header>
          
          <span>{currSlide + 1} of {numSlides} slides</span>
          {/*<a href="/" onClick={ event => onSlidePrev(event) }>Prev</a> | */}


          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" class="svg-content prev-arrow">
            <g id="turn-buttons">
              <a href="/" onClick={ event => onSlidePrev(event) }>
                <polyline class="arrows" points="60 20 20 50 60 80"></polyline>
              </a>
            </g>
          </svg>

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" class="svg-content next-arrow">
            <g id="turn-buttons">
              <a href="/" onClick={ (event) => onSlideNext(event) }>
                <polyline class="arrows" points="100 20 140 50 100 80"></polyline>
              </a>
            </g>
          </svg>

          <a href="/" onClick={ event => onSlimClose(event) }>Close</a>

          <div className="slide-titles">
            <h3>Visual Intro: NYC A Suburb in the City</h3> {/*props.title*/}
            <h1>{slides[currSlide].title}</h1>
            <p>{slides[currSlide].caption}</p>
          </div>
        </header>
        
        <img 
          src= {`http://dev.picturingurbanrenewal.org/prod-assets/exhibits/visual-intro-nyc/${slides[currSlide].imgName}.jpg`}
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
