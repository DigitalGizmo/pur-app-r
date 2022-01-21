import React from 'react';
import MainNav from '../common/MainNav';
import SlideShow from './SlideShow';
import './PersonalStory.css';

// function getImgUrl() {
//   return 'http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-mcmillan-bldg.jpg';
// }

const storyBody = "<p>Under the terms of the contract, Mrs. Wilson would not build any equity or acquire any rights to the property before it was fully paid off. Until then, she occupied the building &ldquo;by sufferance and permission&rdquo; of the Clarinos. In addition to her monthly installments, Wilson agreed to pay the Clarinos $75 per month to cover taxes, water rents, and insurance. On top of that, she was responsible for all repairs. If she fell 30 days behind her payments, the property would revert back to the Clarinos, leaving Wilson empty-handed.</p>" +
"<p>Had city leaders not moved forward with the East Newburgh Urban Renewal project, Mrs. Wilson would probably have paid off the last contract installment in 1974 and taken possession of the deed. Mr. Clarino noted that &ldquo;she has been very prompt with her payments.&rdquo; In the summer of 1971, however, the Newburgh Urban Renewal Agency moved to acquire 68 South St. for $10,500. This left Wilson&rsquo;s financial stake in the property ambiguous.</p>" +
"<p>Fortunately for Wilson, federal officials, recognizing the prevalence of contract buying in urban renewal areas, had recently made provisions for reimbursement of buyers like Wilson. In short, she would be made whole, if Urban Renewal Agency officials could document her contract with the Clarinos. (Unlike traditional home sales, this contract wasn&rsquo;t recorded with the county clerk.)</p>" +
"<p>In Mrs. Wilson&rsquo;s case, her younger brother John M. Griffin played an important role. A World War II Army veteran and project manager for the Department of Defense after the war, Griffin left government service in the 1950s and became a realtor in Rochester. Upon learning of the impending acquisition of 68 South St., he promptly came down to Newburgh, hired a local lawyer, and got a copy of the contract from the Clarinos. Griffin filed the contract with the county clerk and informed the Urban Renewal Agency that Mrs. Wilson had a registered claim to the property.</p>" +
"<p>The closing took place at the end of February 1972. The Clarinos received $3,980. Thanks to recent changes in federal property acquisition and reimbursement regulations&mdash;and a knowledgeable brother&mdash;Mrs. Wilson received the $6,548 she had invested in the property.</p>";

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
        <MainNav selected='people'/>
        <header className="basic-page">
          <h1>Carrie Wilson, Contract Buyer</h1>
          <h4>Newburgh, NY</h4>
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
