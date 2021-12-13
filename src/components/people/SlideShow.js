import React from 'react';

const slides = [
  {imgName: 'dauner-arch-details', caption: 'dauner-arch-details'},
  {imgName: 'dauner-on-roof', caption: 'dauner-on-roof'},
  {imgName: 'haines-mcmillan-bldg', caption: 'haines-mcmillan-bldg'},
  {imgName: 'haines-old-city-hall-pigeons', caption: 'haines-old-city-hall-pigeons'},
];

const { imgName, caption } = slides[0];

let currSlide = 0;
function nextSlide() {
  this.currSlide = 1;
}

// class SlideShow extends React.Component {
const SlideShow = props => {
  // render() {

    return (
      <div className="slim-pop">
        <h2>Slide Show: {props.title}</h2>
        <p>lat: {props.lat > 41 ? 'Northern' : 'Southern'} </p>
        <img 
          src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${imgName}.jpg`}
          alt='meaningful alt text'/>
        <p>caption: {caption}</p>
      </div>
    );
  // } // end render
} // end class

export default SlideShow;
