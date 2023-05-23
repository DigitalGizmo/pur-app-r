import React, { useState, useEffect } from 'react';

const slides = [
  { imgName: '01-gasworks', 
    title: 'The Gas House District',
    caption: '\“The old Gas House District of the lower East Side, famed in song and story and known two generations ago as one of the toughest neighborhoods in New York, soon will be little more than a memory. The heart of the old waterfront community has been acquired by the Metropolitan Life Insurance Company to provide a site for a modern housing center.\” (New York Times, 1944)'
  },
  { imgName: '02-peddler', 
    title: 'Home to European Immigrants',
    caption: 'By 1940, the Gas House District was less tough and more respectable. It was a place where European immigrants settled before moving on to more prosperous neighborhoods. Italians, Poles, Russians, Austrians, Germans, and Hungarians all made their homes there. But as a result of immigration restrictions, that population was on the decline.'
  },
  { imgName: '03-moses', 
    title: 'Slum Clearance',
    caption: 'The plan to raze the Gas House District originated with Robert Moses. New York City\’s powerful Planning Commissioner described the area as a \“slum.\” In its place, he proposed to build middle-class housing. '
  },
  { imgName: '04-model', 
    title: 'Private-Public Partnership',
    caption: 'In 1943, MetLife agreed to build Stuyvesant Town. In return, city officials promised the insurance giant a 25-year tax reduction. This deal ensured a long-term and steady return on investment.'
  },
  { imgName: '05-public-mtg', 
    title: '\"Do You Want to Stay in our Neighborhood?\"',
    caption: 'Gas House District property owners were the first to organize and protest plans for Stuyvesant Town. In 1943, they took the City to court.'
  },
  { imgName: '06-homeless', 
    title: 'Photographic Evidence',
    caption: 'That same summer, a MetLife photographer captured scenes from the Gas House District. Some helped make the case for redevelopment.'
  },
  { imgName: '07-grocery', 
    title: 'Photographic Evidence',
    caption: 'Other photographs undercut the assertion that the Gas House District was a slum.'
  },
  { imgName: '08-demolition', 
    title: 'End of the Gas House District',
    caption: 'In 1945, MetLife began evicting tenants and demolishing the Gas House District.'
  },
  { imgName: '09-banners', 
    title: 'An Appeal to Mayor La Guardia',
    caption: '\"The citizens of the future Stuyvesant Town project have received notice to vacate.... WE are appealing to you for help, we know that it\'s not fair to be put out at a time when our soldiers are fighting to keep our homes together. The majority of us have been born, raised, and brought up our own families in this community.\" (Connie Zimmardo to Mayor La Guardia, 1945)'
  },
  { imgName: '10-reconstruction', 
    title: 'Beginnings of Stuyvesant Town',
    caption: 'Connie Zimmardo\'s appeal proved futile. In May 1946, Harry Delman, his wife, and son Gerald became the last of 3,600 families to move out of the Gas House District. That same month, construction of Stuyvesant Town began.'
  },
  { imgName: '11-family', 
    title: 'World War II Veterans',
    caption: 'In 1947, new tenants began moving in. They were World War II veterans and their families. Many more applied than could be housed.'
  },
  { imgName: '12-ecker', 
    title: '\“Negroes and Whites Don\'t Mix\”',
    caption: 'Some veterans weren\'t welcome. MetLife chairman Frederick Ecker declared, \"Negroes and whites don\'t mix...\"'
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
          
          <span>{currSlide + 1} / {numSlides}</span>
          {/*<a href="/" onClick={ event => onSlidePrev(event) }>Prev</a> | */}

          <a href="/" onClick={ event => onSlidePrev(event) } className="prev-arrow">
            <img 
              src= {`http://dev.picturingurbanrenewal.org/prod-assets/common/arrow-prev.png`}
              className=""
              alt='previous slide'/>
          </a>

          <a href="/" onClick={ (event) => onSlideNext(event) } className="next-arrow">
            <img 
              src= {`http://dev.picturingurbanrenewal.org/prod-assets/common/arrow-next.png`}
              className=""
              alt='next slides'/>
          </a>

          <a href="/" onClick={ event => onSlimClose(event) } className="close">Close</a>

          <div className="slide-titles">
            <h3>Visual Intro: NYC - A Suburb in the City</h3> {/*props.title*/}
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
