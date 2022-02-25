import React from 'react';
import SlideShow from './SlideShow';

// function getImgUrl() {
//   return 'http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-mcmillan-bldg.jpg';
// }

const storyBody = "<p>He faced an uphill fight to win. This Congressional district had twice as many registered Republicans as Democrats. His opponent was a conservative incumbent running for his eighth term. Resnick drove 35,000 miles within the district to meet the voters. He leveraged his wealth as well. He gave away countless pens, buttons, and Chinatown fortune cookies. His most expensive giveaway was a lavishly illustrated booklet that portrayed him as a local boy who made good.</p>" +
"<p>Immediately after he took office in January 1965, he challenged the seating of Mississippi&rsquo;s entire House delegation because African Americans were unable to vote in that state. A month later, he joined a Congressional delegation on a fact-finding mission to Selma, Alabama, where African American leaders fought to register voters.</p>" +
"<p>Joe also took a keen interest in Kingston&rsquo;s urban renewal plans. In the winter and spring of 1966, he investigated complaints of racial discrimination in Kingston&rsquo;s relocation practices. He put community activists from the local chapters of the Congress of Racial Equality (CORE) and NAACP in touch with federal housing officials. He brought officials to Kingston to investigate conditions firsthand. These federal officials urged the Kingston Urban Renewal Agency to add more relocation staff. This did not completely satisfy local activists. Resnick&rsquo;s legislative assistant Shirley Downs acknowledged that &ldquo;the CORE people are right&rdquo; and that Resnick was working behind the scenes to address their concerns. However, she complained that the activists wanted Resnick &ldquo;out picketing City Hall.&rdquo;</p>" +
"<p>A year later, Resnick took a more active role in Kingston&rsquo;s urban renewal program. In May 1967, HUD suspended Kingston&rsquo;s federal funding, due to complaints about botched relocations, persistent and unsafe debris left over from demolitions, and the Urban Renewal Agency&rsquo;s (KURA) refusal to make their records public. Although he publicly denied any role in this suspension, Resnick had advance knowledge of it and supported it. On June 30, he held a one-day hearing in Broadway East to listen to residents&rsquo; concerns. He charged KURA&rsquo;s board and senior leadership with &ldquo;gross incompetence, lack of judgment, and inability to cooperate with other government agencies.&rdquo; Only their &ldquo;immediate resignation&rdquo; would do.</p>" +
"<p>Following their resignations in August and September, Resnick formally requested that HUD lift the suspension of Kingston&rsquo;s funds. He also suggested new KURA board members, including African American ministers and community leaders. The mayor took his suggestions. These changes apparently satisfied Resnick that Kingston had fixed its urban renewal problems.</p>" +
"<p>In 1968, Joe decided to try for higher office. He ran for Senate, but came in third for the Democratic nomination. He returned to his business career. Unfortunately he died on a business trip to California in Oct. 1969. He was 45 years old.</p>";

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
    const imgName = 'resnick-button';

    return (
      <div>
        <header className="basic-page">
          <h1>Joseph Y. Resnick, I&rsquo;m for Joe</h1>
          <h4>Kingston, NY</h4>
        </header>

        <section className="basic-grid">
          <div className="image-full">
            {/*the following mini-template from Grider "showing Icons"*/}
            <img 
              src= {`http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/${imgName}.jpg`}
              alt='meaningful alt text'/>
          </div>

          <div className="image-full-caption">
            <p className="caption">Resnick campaign button, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <article className="text-side">
            <p className="intro">In 1964, after a career as a successful businessman, Joseph Yale Resnick was elected to Congress from the Hudson Valley. In his two terms, he was a progressive on race relations. Locally, his biggest impact came in 1967, when he forced the Kingston Urban Renewal Agency (KURA) director Eric Hemphill and its entire board to resign.</p>

            <span dangerouslySetInnerHTML={{ __html: storyBody }}></span>
          </article>

          <div className="second-col">
            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/resnick-booklet.jpg" 
              alt="cover of booklet"
            />
            <p className="caption">Cover of Resnick&rsquo;s 1964 campaign booklet.</p>

            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/resnick-selma-delegation.jpg" 
              alt="delegation members"
            />
            <p className="caption">Press photo of the Selma Congressional delegation.</p>
          </div>

          <div className="first-col second-row">
            <blockquote>&ldquo;&hellip;a very difficult situation with very difficult local officials.&rdquo;</blockquote>
          </div>

          <div className="second-col second-row">
            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/resnick-hud-letter.jpg" 
            alt="resnick's typewritten letter"/>
            <p class="caption">Resnick&rsquo;s letter to HUD Secretary Weaver.</p>
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
