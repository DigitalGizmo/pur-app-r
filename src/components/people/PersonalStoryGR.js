import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const storyBody = "<p>Throughout his long career, George deeply believed that cities were essential to human progress, culture, and social improvement. And that they needed to be made better for their residents. Programs like urban renewal were necessary to halt the downward spiral of central cities and to ensure that Americans of all classes and races would be able to live in them. Otherwise, he warned in 1965, the city of the 21st century would be &ldquo;a chaos of low-density, characterless suburbs, spattered with neon signs and hamburger stands&rdquo; surrounded by &ldquo;rapidly proliferating slums in the central core.&rdquo; To avoid this fate, a full national commitment&mdash;with adequate resources&mdash;was essential.</p>" ;

const storyBody2 = "<p>By all appearances, George&rsquo;s career as an architect was off to a promising start. Yet he soon realized that he preferred the new field of urban planning over architecture. Urban planners drew on some of the architect&rsquo;s skills and tools but worked on a much larger canvas. And that suited his worldview&mdash;his daughter Valerie describes him as a &ldquo;passionate believer in cities.&rdquo;</p>" +
"<p>In 1954 at the age of 35, George started his own planning firm, Raymond and Associates. Over the next two decades, the firm would consult on urban renewal projects for about 75 cities (including Kingston and Newburgh). In 1959, he was appointed chair of the Department of City and Regional Planning at the Pratt Institute in Brooklyn, a post he held for the next sixteen years.</p>" +
"<p>For both professional and personal reasons, George was a strong supporter of urban renewal. He disagreed sharply with the program&rsquo;s critics. Urbanist Jane Jacobs opened her famous 1961 book, The Death and Life of Great American Cities, with this striking line: &ldquo;This is an attack on current city planning and rebuilding.&rdquo; George dismissed her book as uninformed and &ldquo;regrettably slanted.&rdquo; Sociologist Herbert Gans pilloried the program for not providing enough replacement housing for displaced families. In a 1965 exchange in Commentary magazine, George replied that Gans had used unreliable and outdated statistics about the availability of replacement housing. &ldquo;Most tragically,&rdquo; he concluded, &ldquo;Mr. Gans either does not know, or has forgotten, what slums are like, and the cruel effects they have on those who live in them.&rdquo; Yet by 1968 he had come to agree with them that the &ldquo;bulldozer technique&rdquo; of urban renewal was not working as intended. Renewal projects often pushed displaced families into public housing, which they did not want. And relocation reimbursements were woefully inadequate to cover their moving and relocation expenses.</p>" +
"<p>Exchanges like these convinced George that planners must educate the public about the nature of urban problems and the planner&rsquo;s role in solving them. For several years, he led an adult education program at the New School for Social Research on urban renewal and other planning issues in New York City.</p>" +
"<p>George believed that understanding urban affairs required education, experience, and skill. Many local renewal officials, he charged, were appointed by &ldquo;political choice&rdquo; and &ldquo;not on the basis of technical competence and merit.&rdquo; He also blamed the delays and cost overruns common to urban renewal projects on the &ldquo;obstructionism of an often philosophically divided, confused, and strife-torn citizenry.&rdquo;</p>" +
"<p>The solution, George thought, was to work directly with communities. In 1963, he helped set up the Pratt Center for Community Improvement in the distressed Bedford-Stuyvesant area of Brooklyn. He described the Center as a counterweight to &ldquo;an ever-growing urban bureaucracy, relatively isolated from the people who are its ultimate constituents.&rdquo; But in order for citizens to participate fully in urban renewal projects, they needed to have &ldquo;a reasonably thorough understanding&rdquo; of the program.</p>" +
"<p>With Center support, at the end of 1964 residents developed their own comprehensive plan for the neighborhood. A survey done for this plan identified several hundred vacant lots and abandoned buildings which could serve as targets for vest-pocket parks and rehabilitation projects. The survey also collected data &ldquo;on the unavailability of fire insurance in the area.&rdquo; Their findings prompted a series of hearings by the State Insurance Superintendent. In 1967 Governor Nelson A. Rockefeller promised to support legislation outlawing insurance redlining.</p>" +
"<p>The Center also gave tours to elected officials. After Senator Robert F. Kennedy toured the area in Feb. 1966, he instructed his staff to help the community set up a neighborhood Renewal and Rehabilitation Corporation. Finally, the Center published a 300-page Citizens&rsquo; Handbook of Housing, Planning & Urban Renewal Procedures in New York City.</p>" +
"<p>As his teaching and consulting careers wound down, George turned more of his attention toward fair and open housing. As a volunteer, George had served since the 1960s on the Citizens Housing and Planning Council of New York City. The council&rsquo;s mission was to solve the city&rsquo;s persistent low and moderate income housing shortage. In his home county, he was president of the Westchester Citizens Housing Council, leading the fight against restrictive zoning codes. These zoning codes typically mandated minimum lot sizes for single-family homes and banned multi-family apartment buildings. Only the affluent could afford to live in places like his own Westchester County. He told a New York Times reporter in 1993, &ldquo;There is a strong need to provide affordable housing for young people who are just getting started, senior citizens whose income is insufficient to afford housing and all the workers—janitors, waitresses, municipal workers, single parents—who need places to live.&rdquo;</p>" +
"<p>In the 1970s and 1980s, the New Jersey Supreme Court and lower courts appointed him to serve as special master in a series of fair housing rulings known as the Mount Laurel Cases. These cases required affluent, largely white suburbs to build affordable housing. George helped to ensure that these communities met their obligations. Harvard Law School professor Charles M. Haar described George&rsquo;s work as giving New Jersey trial decisions &ldquo; the weight of professional expertise and legitimation.&rdquo;</p>" +
"<p>He tried to apply what he seen in New Jersey to his home county. In a ruling similar to the Mount Laurel cases, New York&rsquo;s highest court ruled in 1975 that suburban communities ought to provide affordable housing. But unlike the New Jersey ruling, the decision stopped short of requiring that they do so. His daughter Valerie describes  his housing advocacy as the aspect of his career of which he was most proud. Yet he was &ldquo;very discouraged&rdquo; about the slow progress he witnessed in Westchester county. Despite his decades of work, he &ldquo;had not gotten these folks to budge very much.&rdquo;</p>" +
"<p>George believed that careful planning and public engagement could improve America&rsquo;s cities for residents of all classes and backgrounds. But when he tried to apply these principles to his own community, he ran into a suburban stonewall.</p>";


const PersonalStory = () => {
  const imgName = 'raymond-pratt-institute';
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('people');
    document.title = 'People - George Raymond';
  }, [changePageName])


    return (
      <div>
        <header className="basic-page">
        <nav>
          <p>
            <Link to="/">
              <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
              alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
            </Link> &gt; &nbsp;
            <a href="#">People</a> &gt;
            George M. Raymond
          </p>
        </nav>
        <div className="page-title">
          <h1>George M. Raymond, A Passionate Believer in Cities</h1>
          <h4>Kingston, Newburgh, NY</h4>
        </div>
      </header>

        <section className="basic-grid">
          <div className="image-full">
            {/*the following mini-template from Grider "showing Icons"*/}
            <img 
              src= {`http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/${imgName}.jpg`}
              alt='George Raymond accepting a clock at event celebrating his retirement'/>
          </div>

          <div className="image-full-caption">
            <p className="caption">George Raymond accepting a clock at an event celebrating his retirement.</p>
          </div>

          <article className="text-side">
            <p className="intro">In 1953, the New York Times published a letter from a young urban planner named George Raymond. He praised the city&rsquo;s redevelopment plan for the area south of Washington Square. It included new neighborhood stores, off-street parking, and rental housing for low, moderate, and high income households. The planned project, he thought, &ldquo;was probably the best yet attempted in this city.&rdquo; But he admitted, &ldquo;It is always regrettable that some of the charm of the old must give way to the new.&rdquo;</p>

            <span dangerouslySetInnerHTML={{ __html: storyBody }}></span>


            <span dangerouslySetInnerHTML={{ __html: storyBody2 }}></span>
          </article>
            
          <div className="first-col second-row">
            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/raymond-pratt-guide.jpg"
            alt="Pratt Guidebook" />
            <p className="caption">Pratt Guidebook.</p>
          </div>

          <div className="second-col second-row">
            <img 
              src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/raymond-rondout-map-1961.jpg" 
              alt="Contract"
            />
            <p className="caption">Map of Kingston Rondout area.</p>

            <audio className="personal-story-quote"
              src="http://dev.picturingurbanrenewal.org/prod-assets/people/media/wnyc-raymond-19680203-ur-ww2.mp3" 
              type="audio/mpeg" controls/>
            <p className="caption">George M. Raymond speaks about the need for full national commitment to urban renewal at the Urban Leadership Symposium, Feb. 3, 1968.</p>
          </div>

          <div className="second-col fourth-row">
            <img src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/raymond-neighborhood-design-1963.jpg" 
            alt="Design for a residential neighborhood"/>
            <p class="caption">Design for a residential neighborhood.</p>
          </div>

        </section>

      </div>
    );
} // end class

export default PersonalStory;
