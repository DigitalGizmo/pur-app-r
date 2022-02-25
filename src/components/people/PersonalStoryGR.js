import React from 'react';
import SlideShow from './SlideShow';

// function getImgUrl() {
//   return 'http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-mcmillan-bldg.jpg';
// }

const storyBody = "<p></p>" +
"<p></p>" +
"<p></p>" +
"<p></p>" +
"<p></p>";

// function PersonalStory(props) {
class PersonalStory extends React.Component {
  state = {lat: null, errorMessage: '', isShowing: false};

  onSlideLinkClick = event => {
    event.preventDefault();
    this.setState({ isShowing: true });
    console.log('slideshow clicked');
  }

  onSlideClose = () => {
    console.log('ins story close ');
    this.setState({ isShowing: false });
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log('lat: ' + position.coords.latitude);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    // const imgUrl = 'http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-mcmillan-bldg.jpg';
    const imgName = '68-South-Street-1970';

    return (
      <div>
        <header className="basic-page">
          <h1>George M. Raymond, A Passionate Believer in Cities</h1>
          <h4>Kingston, Newburgh, NY</h4>
        </header>

        <section className="basic-grid">
          <div className="image-full">
            {/*the following mini-template from Grider "showing Icons"*/}
            <img 
              src= {`http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/${imgName}.jpg`}
              alt='meaningful alt text'/>
          </div>

          <div className="image-full-caption">
            <p className="caption">970 appraisal photo of Carrie Wilson's home at 68 South Street, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <article className="text-side">
            <p className="intro">On Dec. 11, 1964, 55-year-old Carrie Wilson, a widow and mother of ten, signed a contract with local realtor Frank Clarino and his wife Julia to buy a four-story brick building with three apartments at 68 South St. for $10,000. Wilson put $1,000 down,the remaining $9,000 to be paid in monthly installments of $100 at 6 per cent interest, the maximum rate allowed by New York State&rsquo;s usury law. At this rate, it would have taken Wilson ten years to pay off the contract with a total cost of about $12,600.</p>

            <span dangerouslySetInnerHTML={{ __html: storyBody }}></span>
          </article>

          <div className="second-col">
            <img 
              src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/clarino-wilson-contract-extract.jpg" 
              alt="Contract"
            />
            <p className="caption">Extract of contract between Frank and Julia Clarino and Carrie Wilson for contract sale of 68 South St., Dec. 1964. <a href="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/wilson-clarino-contract.pdf" target="_blank"               rel="noreferrer">View complete contract.</a></p>
          </div>
            
          <div className="first-col second-row">
            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/griffin-business-card.jpg"
            alt="Business card" />
            <p className="caption">Business card of Carrie Wilson&rsquo;s brother.</p>
          </div>

          <div className="second-col second-row">
            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/griffin-bennet-doc.jpg" 
            alt="Portrait of griffin bennet"/>
            <p class="caption">Griffin&rsquo;s advocacy on behalf of his sister.</p>
          </div>

        </section>

        {this.state.isShowing && 
          <SlideShow 
          lat={this.state.lat}
          title="Haines-Dauner"
          closeSlim = {this.onSlideClose}
        />};

{/*          title= 'Haines - Dauner'
*/}
      </div>
    );
  } // end render
} // end class

export default PersonalStory;
