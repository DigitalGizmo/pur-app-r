import React from 'react';
import './SlideShow.css';

const slides = [
  {imgName: 'dauner-arch-details', caption: 'dauner-arch-details'},
  {imgName: 'dauner-on-roof', caption: 'dauner-on-roof'},
  {imgName: 'haines-mcmillan-bldg', caption: 'haines-mcmillan-bldg'},
  {imgName: 'haines-old-city-hall-pigeons', caption: 'haines-old-city-hall-pigeons'},
];


let currSlide = 0;
// const { imgName, caption } = slides[currSlide];
const { imgName, caption } = slides[currSlide];

// function nextSlide() {
//   this.currSlide = 1;
// }

class SlideShow extends React.Component {
// const SlideShow = props => {
  // state = { currSlide: 0 };
  onSlimClose = event => {
    event.preventDefault();
    console.log('close')
    this.props.closeSlim();
  }

  render() {

    return (
      <div className="lightbox"> {/*onClick={this.onSlimClose}*/}
        <div className="slimpop-wrapper slide-show">
          <p className="close">
            {/*<a href="/" onClick="prevEntry">Prev</a> |
            <a href="/" onClick="nextEntry">Next</a> | */}
            <a href="/" onClick={this.onSlimClose}>Close</a>
          </p>
          <h2>Slide Show: {this.props.title}</h2> {/*props.title*/}
          <img 
            src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${imgName}.jpg`}
            alt='meaningful alt text'/>
          <p>caption: {caption}</p>
        </div>
      </div>
    );
  } // end render
} // end class

SlideShow.defaultProps = {
  title: 'Title sent from PersonalStory'
};

export default SlideShow;
