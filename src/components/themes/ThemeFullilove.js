import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const ThemeFullilove = ({isSubPop}) => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    if (!isSubPop) { changePageName('themes');}
    document.title = 'Essay - Root Shock';
  }, [changePageName, isSubPop])

  return (
    <div>

      {isSubPop ?
        <header className="basic-page">
          <h4><Link to="/themes">Essays</Link></h4>
          <h2>Root Shock</h2>
          <h4>Mindy Thompson Fullilove, MD, Professor of Urban Policy and Health, The New School</h4>
        </header>
      :
        <header className="basic-page">
          <nav>
            <p>
              <Link to="/">
                <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
                alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
              </Link> &gt; &nbsp;
              <Link to="/themes">Essays</Link> &gt;
              Root Shock
            </p>
          </nav>
          <div className="page-title">
            <h1>Root Shock</h1>
            <h4>Mindy Thompson Fullilove, MD, Professor of Urban Policy and Health, The New School</h4>
          </div>
        </header>
      }

      <section>
        <div className="image-full">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/root-shock.jpg"
              alt='meaningful alt text'/>
        </div>

        <div className="theme">
          <p className="caption first">A state employee photographed Ethel and Robert Mather inside their home as part of the process of appropriating private property. Source: New York State Archives.</p>
          
          <article className="narrative">
        
            <p className="intro">People pass their lives in specific locations, and, through exchange and interrelatedness, develop complex and important emotional connections within and to those places. These specific locations are both bounded in a locale and linked to global networks and processes. Place is understood to be at once a geographic site and the social system organized at that location. It operates as a node in the complex global web of economic, social, and physical relationships.</p>
            <p>A key feature of human life is that we have significant relationships with the places in which we pass our lives. The term &ldquo;beloved community,&rdquo; first proposed by Josiah Royce, is associated with Reverend Dr. Martin Luther King Jr., who popularized its use during the Civil Rights Movement of the 1950s and 60s. According to the King Center website: 
            <blockquote>Dr. King&amp;rsquo;s Beloved Community is a global vision, in which all people can share in the wealth of the earth. In the Beloved Community, poverty, hunger and homelessness will not be tolerated because international standards of human decency will not allow it. Racism and all forms of discrimination, bigotry and prejudice will be replaced by an all-inclusive spirit of sisterhood and brotherhood. In the Beloved Community, international disputes will be resolved by peaceful conflict-resolution and reconciliation of adversaries, instead of military power. Love and trust will triumph over fear and hatred. Peace with justice will prevail over war and military conflict.</blockquote></p>
            <p>While no community has attained this vision in full, some communities have been able to develop strong social networks that have supported people in their efforts to solve problems, take care of the vulnerable, and develop rich and fulfilling lives. These communities, because of their solidarity and problem-solving ability, also have the capacity to acquire social, economic, cultural, and political capital. The beloved community might become a threat to the powers-that-be because of its growing wealth and power. Such communities have become targets of serial forced displacement.</p>
            <p>Dis-PLACE-ment, is, by definition, a rupture of the geographic and the social. Disruptions of this kind force people to remake geographic and emotional connections, including those we know as &amp;ldquo;place attachment.&amp;rdquo; What I have called &ldquo;root shock&rdquo;&mdash;the traumatic stress reaction to the loss of all or part of one&rsquo;s emotional ecosystem&mdash;occurs with upheaval. In contrast to voluntary moves, in which people make the choice to relocate, forced displacement occurs as a result of the imposition of forces greater than the community.</p>
            <p>Historians have documented a series of harsh upheavals in Pittsburgh&rsquo;s Hill District, an African American neighborhood located to the north and west of the city&rsquo;s downtown. The first upheaval was urban renewal carried out in the late 1950s, which demolished the commercial section of the Hill, forcibly displacing 8,000 people, and destroying many businesses, churches, and social organizations. The second was deindustrialization, which deconstructed Pittsburgh&rsquo;s massive industrial base between 1960 and 1990. This had an enormous impact on the Hill District, whose residents were largely employed in the city&rsquo;s unskilled manufacturing sector. The third was the civil insurrection in the 1960s that followed Dr. Martin Luther King Jr.&rsquo;s assassination, which destroyed an important stretch of commerce in the Middle Hill. The fourth was the incursion of drug dealing, which replaced industry as a source of employment and offered solace for the pain of upheaval. The fifth was what Derek S. Hyra calls &ldquo;the new urban renewal,&rdquo; so-called revitalization programs, including the HOPE VI program, that demolished housing projects and replaced them with mixed-income communities. As a result of these processes, the population fell from 38,100 in 1950 to 9,830 in 1990.</p>
            <p>The changes in the Hill were massive. The boundaries of The Hill shifted, the paths linking The Hill to the larger city of Pittsburgh were constricted, the housing stock deteriorated and disappeared, the commercial centers were lost, the many organized centers that provided safe spaces for youth were closed, the safe outdoors spaces became sites of crime and violence, and the population declined precipitously. The Hill was &ldquo;desertified,&rdquo; meaning that a rich and life-sustaining urban ecosystem was stripped of resources and rendered impotent, just as overworked agricultural lands in the Sahel have dwindled into deserts.</p>
            <p>In a seminal paper entitled, &ldquo;Children&rsquo;s lived spaces in the inner city: historical and political aspects of the psychology of place,&rdquo; Eva-Maria Simms described the lived experience of The Hill during this series of displacements. Simms was interested in learning about patterns of play in the Hill District. She initiated her study with the assumption that she could understand the lived spaces of childhood without investigating the social history of the place in which those childhoods were lived. She noted:  
            <blockquote>I approached the Hill community for this project because I was looking for a coherent, stable neighborhood that had the loyalty of a number of generations of inhabitants who played in the same places.  During the interviews with The Hill inhabitants, however, the tragic history of the Hill District became a major player in the constructions of their narratives.  Even though the participants did talk about building play-forts in the woods or hiding in the tree in front of the rent-office, the overwhelming story they told about their particular neighborhood was of a childhood embedded in the political and cultural changes in African American culture in the 20th century.</blockquote></p>
            <p>Simms identified three distinct eras in the neighborhood&rsquo;s history. In the first era, from 1930 to 1960&mdash;which I refer to as Simms I&mdash;adults and children lived in a highly integrated neighborhood, and children moved fluidly throughout the territory and among the many activities and happenings it offered. They were protected by a net of all adults who felt themselves responsible for a net of all the children. Simms described:
            <blockquote>The relationship between adults and children was clear: Adults cared for the young and had authority.  When 19-year-old Dale and his young wife moved to The Hill in 1944, Mrs. Brown, his landlady, he said, &ldquo;acted like a parent.  In fact, she insisted and I still belong to Macedonia Baptist Church&rdquo; (Dale is now in his 80s).  The adults did not play with the children, but because life was so public, the children always had the feeling that some adult, family or neighbor, would watch the[m] from the stoop or porch or through the open kitchen window.  When adults were not working, they could be found on their front porches talking to each other across the narrow streets or listening to the radio together.  The eyes of the neighborhood rested on its children; &ldquo;everybody watched everybody,&rdquo; as Faustine said.</blockquote></p>
            <p>The second era, which Simms dated from 1960 to 1980&mdash;Simms II in my nomenclature&mdash;was a time of transition. Some of the old communal structures survived. For example, the adults of the neighborhood still felt that they could discipline all of the children. But a new anxiety and dissatisfaction were creeping in. Simms writes: 
            <blockquote>Like the earlier generation, the children of the 60s and 70s had to obey one rule, which almost all participants in the interviews mentioned: You had to be on your front porch when the streetlights went on at nightfall.  But now the coming on of the streetlights was no longer framed in terms of cozily gathering around the radio to listen to the spooky 1940s Inner Sanctum radio show.  Mothers made sure that children were in front of the house because they were afraid of the nighttime activity in their neighborhoods. &ldquo;It saved my life,&rdquo; Lamar observed, because many of the kids he played with at that time, &ldquo;passed away as kids because they got hung up on heroin.&rdquo;</blockquote></p>
            <p>By the third era, which Simms dated from 1980 to 2004&mdash;Simms III in my system&mdash;networks had shrunk from neighborhood-wide connections to connections among a small number of family members and neighbors. Families, which had included large, extended families in the first era, had also become quite small, often consisting of a single mother with her children. Darien, one the interviewees who grew up in that era, coined the phrase &ldquo;unexpectancy,&rdquo; to describe life in the neighborhood in that era:
            <blockquote>In general, you never know what might happen, you in the hood, just you coming out that door, just to see what&rsquo;s outside, could be &ldquo;a surprise&rdquo; everyday.  Unexpectancy.  You know, like I said, you wake up every day and you could think one thing and it could turn out to be another thing, you know, so just with those &ldquo;situations&rdquo; at hand as a young&rsquo;n, as a young kid, that is, it&rsquo;s just different in &ldquo;My world&rdquo; considering others.  But as I said, depending on where you do and who you be with at those particular times can maybe make you or break you.  It&rsquo;s all about survival, when it gets down to it.  But life is what you make it, so. Just in general. You know, you never knows what lies around what corner, but just gotta be able to be prepared and just hope, you know, you know as they say look both ways before you cross the street, so. That&rsquo;s basically how it is here. Just look both ways.</blockquote></p>
            <p>In the context of such massive shifts in the place, what has happened to attachment to place? Simms addresses this point in the following manner:
            <blockquote>Perhaps we can learn a lesson for urban development from the earlier Hill community by understanding that the physical structure of a place is deeply connected to the kind of community practices that exist there.  The relationship goes both ways: Places create clearings for communal activities&mdash;or foreclose them, as we saw in the housing projects of The Hill.  Changes in the community, on the other hand, can redefine what a place means and how it is used&hellip;&rdquo;</blockquote></p>
            <p>I would like to highlight Simms&rsquo;s term &ldquo;community practices,&rdquo; which denotes the complex and reciprocal relationships among people and the economic, social, and physical resources existing in the location. The community practices shifted dramatically as The Hill was depleted of resources and became organized in smaller, and less mutually-beneficial, social units. The solidarity of the neighborhood in the 1930s was replaced with &ldquo;unexpectancy,&rdquo; and accompanying behaviors of suspicion and uncertainty. Yet, we also find in her paper ample evidence that her informants knew about the place-that-was, and longed for it to be again.</p>
            <p>That loss-and-longing is the ultimate story of root shock.</p>

            <p>This essay is excerpted from &ldquo;Revisiting &ldquo;The Frayed Knot&rdquo;: What happens to place attachment in the context of serial forced displacement?&rdquo; To be published in Lynne C. Manzo and Patrick Devine-Wright, editors, Place Attachment: Advances in Theory, Methods and Applications, Second Edition, Routledge, 2020.</p>

            <h4>Bibliography:</h4>
            <ul className="bibliography">
              <li>Acker, C. J. (2009). How Crack Found a Niche in the American Ghetto: The Historical Epidemiology of Drug-Related Harm. BioSocieties, 5, 70-88. doi: 10.1057/biosoc.2009.1</li>
              <li>Bluestone, B., &amp; Bennett, H. (1982). The Deindustrialization of America: Plant Closings, Community Abandonment, and the Dismantling of Basic Industry. New York: Basic Books.</li>
              <li>Brown, B. B., &amp; Perkins, D. D. (1992). Disruptions in Place Attachment. New York City: Plenum Press.</li>
              <li>Chow, K., & Healey, M. (2008). Place Attachment and Place Identity: First-year Undergraduates Making the Transition from Home to University. Journal of Environmental Psychology, 28(4), 362-372. doi: 10.1016/j.jenvp.2008.02.011</li>
              <li>Erikson, K. T. (1976). Everything in Its Path: Destruction of Community in the Buffalo Creek Flood. New York: Simon &amp; Schuster.</li>
              <li>Fullilove, M. T. (1996). Psychiatric Implications of Displacement: Contributions from the Psychology of Place. American Journal of Psychiatry, 153(12), 1516 - 1523.</li>
              <li>Fullilove, M. T. (2004). Root Shock: How Tearing Up City Neighborhoods Hurts America and What We Can Do About It. New York: Ballantine Books.</li>
              <li>Fullilove, M. T., & Wallace, R. (2011). Serial Forced Displacement in American Cities, 1916-2010. Journal of Urban Health, 88(3), 381-389.</li>
              <li>Fullilove, M. T. (2013). Urban Alchemy: Restoring Joy in America&rsquo;s Sorted-Out Cities. Oakland: New Village Press.</li>
              <li>Glasco, L. (1989). Double Burden: The Black Experience in Pittsburgh. In S. P. Hays (Ed.), City at the Point. Pittsburgh: University of Pittsburgh Press.</li>
              <li>King Center.  (2020).  The Beloved Community.  https://thekingcenter.org/king-philosophy/.</li>
              <li>King, M. L., Jr. (2003).  &ldquo;An Experiment in Love,&rdquo; in King, M. L., & Washington, J. M. Testament of Hope: The Essential Writings and Speeches of Martin Luther King, Jr. San Francisco, CA: HarperSanFrancisco, 16-20.</li>
              <li>Hyra, D. S. (2012). Conceptualizing the New Urban Renewal: Comparing the Past to the Present. Urban Affairs Review, 48, 498-427.</li>
              <li>Lubove, R. (1996). Twentieth Century Pittsburgh: The Post Steel Era, Volume 2. Pittsburgh: The University of Pittsburgh Press.</li>
              <li>Manzo, L. (2014). On Uncertain Ground: Being at Home in the Context of Public Housing Redevelopment. International Journal of Housing Policy, 14(4), 389-410.</li>
              <li>Massey, D. (1995). Conceptualisation of Place. In D. Massey & P. Jess (eds.), A Place in the World? Places, Culturesk and Globalization (pp. 87-132). Oxford: Oxford University Press.</li>
              <li>Simms, E.-M. (2008). Children&rsquo;s Lived Spaces in the Inner City: Historical and Political Aspects of the Psychology of Place. The Humanistic Psychologist, 36(1), 72-89.</li>
              <li>Toker, F. (1986). Pittsburgh: An Urban Portrait. Pittsburgh: University of Pittsburgh Press.</li>
              <li>Trotter, J. W., &amp; Day, J. N. (2010). Race and Renaissance: African Americans in Pittsburgh since World War II. Pittsburgh: University of Pittsburgh Press.</li>
              <li>Wallace, A. (1957). Mazeway Disintegration: The Individual&rsquo;s Perception of Socio-Cultural Disorganization. Human Organization, 16, 23 - 27.</li>
              <li>Wallace, R. (1988). A Synergism of Plagues: &ldquo;Planned Shrinkage,&rdquo; Contagious Housing Destruction, and AIDS in the Bronx. Environmental Research, 47, 1 - 33.</li>
              <li>Wallace, R. (1990). Urban Desertification, Public health and Public order: &lsquo;Planned Shrinkage&rsquo;, Violent Death, Substance Abuse and AIDS in the Bronx. Social Science &amp; Medicine, 31(7), 801-813. doi: 10.1016/0277-9536(90)90175-r.</li>
              <li>Watkins, B. X. (2000). Fantasy, Decay, Abandonment, Defeat, and Disease: Community Disintegration in Central Harlem 1960-1990. Columbia University, New York.   </li>
              <li>White, F. (2006). Rethinking Native American Language Revitalization. American Indian Quarterly, 30(1/2), 91-109. </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );

}

export default ThemeFullilove;