import React from 'react';
import './SlideShow.css';

const slides = [
  {imgName: 'dauner-arch-details', caption: 'dauner-arch-details'},
  {imgName: 'dauner-on-roof', caption: 'dauner-on-roof'},
  {imgName: 'haines-mcmillan-bldg', caption: 'haines-mcmillan-bldg'},
  {imgName: 'haines-old-city-hall-pigeons', caption: 'haines-old-city-hall-pigeons'},
];


// let currSlide = 0;
// // const { imgName, caption } = slides[currSlide];
// const { imgName, caption } = slides[currSlide];

// function nextSlide() {
//   this.currSlide = 1;
// }

class SlideShow extends React.Component {
  state = { currSlide: 0 };

  // baseImagePath = 'http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/';

  onSlimClose = event => {
    event.preventDefault();
    console.log('close')
    this.props.closeSlim();
  }

  onSlideNext = event => {
    event.preventDefault();
    if (this.state.currSlide < (slides.length - 1)) {
      this.setState({currSlide: this.state.currSlide + 1});
    }
  }

  onSlidePrev = event => {
    event.preventDefault();
    if (this.state.currSlide > 0) {
      this.setState({currSlide: this.state.currSlide - 1});
    }
  }

  render() {

    return (
      <div className="lightbox"> {/*onClick={this.onSlimClose}*/}
        <div className="slimpop-wrapper slide-show">
          <p className="close">
            <a href="/" onClick={this.onSlidePrev}>Prev</a> | 
            <a href="/" onClick={this.onSlideNext}>Next</a> | 
            <a href="/" onClick={this.onSlimClose}>Close</a>
          </p>
          <h2>Slide Show: {this.props.title}</h2> {/*props.title*/}
          <img 
            src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${slides[this.state.currSlide].imgName}.jpg`}
            alt='meaningful alt text'/>
          <p>caption: {slides[this.state.currSlide].caption}</p>
        </div>
      </div>
    );
  } // end render
} // end class

SlideShow.defaultProps = {
  title: 'Title sent from PersonalStory'
};

export default SlideShow;
