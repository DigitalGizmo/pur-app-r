import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const storyBody = "<p>We know little about John or George. But James (better known as &ldquo;Jimmy&rdquo;) appears again in two appraisal photographs by State employees. The first is a portrait of the 68-year-old standing in the middle of his apartment. The second shows him outside on his front steps.</p>" +
"<p>Jimmy was born in Columbus, OH. He moved to Albany with his wife Eleanor from Newark, N.J. sometime during or just before World War II. He found a job at the Army Depot in nearby Voorheesville. He also played a regular gig at the Red and Blue Club on South Pearl Street. Throughout the 1940s, Jimmy Strawn&rsquo;s orchestra—variously named the Barons of Swing, Men of Music, Sultans of Swing, Music Makers—were in high demand.</p>" +
"<p>In the 1950s, Jimmy appears to have fallen on hard times. He was widowed and became a single parent. At the same time, the demand for swing music and downtown dance clubs dried up. To make ends meet and support his young son, Jimmy found a job as a janitor and ran an off-the-books barbershop out of his Grand Street apartment. In 1962, he was arrested collecting gambling slips for a local bookie.</p>" +
"<p>By 1964, Jimmy&rsquo;s luck appears to have improved. He and his son moved into a new apartment on Lark Street. And Jimmy found a regular gig up north at a Niagara Falls night club. Club Ragtime promoted Jimmy as the &ldquo;Pearly King of the Honky Tonk Piano.&rdquo; Ads promised a &ldquo;wacky, way-out evening&rdquo; with the flamboyant performer. &ldquo;Hear him do all the old songs—and your not-so-old favorites.&rdquo;</p>" +
"<p>Return to Albany City Story: <a href='http://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html#chapter1'>Reaction to Redevelopment</a></p>";

const PersonalStory = ({isSubPop}) => {
  const imgName = 'strawn-living-room';
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('people');
    document.title = 'Personal Story - Jimmy Strawn';
  }, [changePageName])

  return (
    <div>

      {isSubPop ?
        <header className="basic-page">
          <h4><Link to="/people">People -></Link></h4>
          <h2>Jimmy Strawn, The Sultan of Swing</h2>
          <h4>Albany, NY</h4>
        </header>
      :
        <header className="basic-page">
          <nav>
            <p>
              <Link to="/">
                <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
                alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
              </Link> &gt; &nbsp;
              <a href="#">People</a> &gt;
              Jimmy Strawn
            </p>
          </nav>
          <div className="page-title">
            <h1>Jimmy Strawn, The Sultan of Swing</h1>
            <h4>Albany, NY</h4>
          </div>
        </header>
      }


      <section className="basic-grid">
        <div className="image-full">
          {/*the following mini-template from Grider "showing Icons"*/}
          <img 
            src= {`http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/${imgName}.jpg`}
            alt='meaningful alt text'/>
        </div>

        <div className="image-full-caption">
          <p className="caption">Jimmy Strawn in the living room of his rental apartment. The high ceilings and detailed wooden moldings suggest that his apartment was once a larger, elegant home that had been subdivided into smaller, less expensive units.</p>
        </div>

        <article className="text-side">
          <p className="intro">On March 27, 1962—the day most Albany residents learned about the State&rsquo;s South Mall plan—two Knickerbocker News reporters hit the streets to gauge public opinion. Among the people they encountered was a group of three men, all Black and living in rented apartments on Grand Street, which was soon to be demolished. The first to speak was John Johnson, who said, &ldquo;These houses are old. I think it would be swell to tear these buildings down.&rdquo; James C. Strawn agreed, commenting that demolishing &ldquo;these 50-and-60 year old buildings might make for some decent places in which to live.&rdquo; George Kemp Jr. added, &ldquo;This would be a pretty good deal if they included housing projects too.&rdquo;</p>

          <span dangerouslySetInnerHTML={{ __html: storyBody }}></span>
        </article>

        <div className="second-col">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/strawn-barber-chair.jpg" 
            alt="Contract"
          />
          <p className="caption">The barber chair where Jimmy Strawn conducted his off-the-books barbering.</p>
        </div>
          
        <div className="first-col second-row">
          <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/strawn-exterior.jpg"
          alt="Business card" />
          <p className="caption">Jimmy Strawn on his stoop.</p>
        </div>

        <div className="second-col second-row">
          <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/strawn-bedroom.jpg" 
          alt="Portrait of griffin bennet"/>
          <p className="caption">Jimmy Strawn's bedroom.</p>
          <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/strawn-kitchen.jpg" 
          alt="Portrait of griffin bennet"/>
          <p className="caption">Jimmy Strawn's kitchen.</p>

        </div>

      </section>
    </div>
  );
} // end class

export default PersonalStory;
