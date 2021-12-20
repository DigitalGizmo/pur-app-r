import React from 'react';
import './SlideShow.css';

const slides = [
  {imgName: 'dauner-arch-details', caption: 'Architectural details of a building soon to be demolished for Kingston\'s Broadway East Urban Renewal Project, 1967.'},
  {imgName: 'dauner-1865-bldg', caption: 'The 1865 Building, 74 Broadway, before demolition.'},
  {imgName: 'dauner-1865-bldg-demo', caption: 'The 1865 Building being demolished.'},
  {imgName: 'haines-mcmillan-bldg', caption: 'Demolition of McMillan Building, Downtown Kingston, 1967.'},
  {imgName: 'haines-old-city-hall-pigeons', caption: 'This Bob Haines photograph accompanied an article by Kingston Daily Freeman Reporter Hugh Reynolds, March 18, 1975.'},
  {imgName: 'dauner-demo-scene', caption: 'Aftermath of demolition.'},
  {imgName: 'dauner-hasbrouck-strand', caption: 'Corner of Hasbrouck St. and E. Strand. The building on the left is the McMillian Building, former home of ship chandlery, from which Gene Dauner and Bob Haines removed some architectural detail. The former Colonial Hotel is across the street.'},
  {imgName: 'dauner-poor-mans-paradise', caption: 'Poor Man\'s Paradise in process of demolition This secondhand store at 65 E. Strand was owned by Nick Matthews.'},
  {imgName: 'dauner-yallums-detail', caption: 'Close-up photograph of Yallum\'s Department Store. The x inside a circle is a common way to indicate that a vacant building was dangerous to enter.'},
  {imgName: 'haines-buildings-boarded-up-2', caption: 'A row of buildings boarded up and awaiting demolition in the Broadway East urban renewal area. Bob Haines photo.'},
  {imgName: 'haines-clearance', caption: 'Broadway East urban renewal area in process of being cleared. Bob Haines photograph.'},
  {imgName: 'haines-demo-rear-bldg', caption: 'Rear of building being demolished. Bob Haines photograph.'},
  {imgName: 'haines-demo-unknown-bldgs-3', caption: 'Demolition of buildings in the Broadway East urban renewal area. Bob Haines photograph.'},
  {imgName: 'haines-fischer-street', caption: 'Fischer Building after demolition, with adjacent buildings awaiting their turn. Bob Haines photograph.'},
  {imgName: 'haines-utility-poles', caption: 'Utility workers removing wiring and other equipment from overhead poles in the Broadway East urban renewal area. Bob Haines photograph.'},];



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
          <p>{slides[this.state.currSlide].caption}</p>
          <img 
            src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${slides[this.state.currSlide].imgName}.jpg`}
            alt='meaningful alt text'/>
        </div>
      </div>
    );
  } // end render
} // end class

SlideShow.defaultProps = {
  title: 'Title sent from PersonalStory'
};

export default SlideShow;
