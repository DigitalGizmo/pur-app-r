import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const ThemeCampbell = ({isSubPop}) => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('themes');
    document.title = 'Essay: Who Lived Here?';
  }, [changePageName])

  return (
    <div>

      {isSubPop ?
        <header className="basic-page">
          <h4><Link to="/themes">Essays -></Link></h4>
          <h2>Who Lived Here? The Lives of Albany Residents Revealed in Photographs</h2>
          <h4>Robin Campbell, Chief Curator, New York State Bureau of Historic Sites, retired. Adjunct Professor of History, University of Albany, SUNY</h4>
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
              Who Lived Here?
            </p>
          </nav>
          <div className="page-title">
            <h1>Who Lived Here? The Lives of Albany Residents Revealed in Photographs</h1>
            <h4>Robin Campbell, University of Albany, SUNY</h4>
          </div>
        </header>
      }

      <section>
        <div className="image-full">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/slip-cover-top.jpg"
              alt='meaningful alt text'/>
        </div>

        <div className="theme">
          <p className="caption first">From looking at this photo, what can you tell about the people who once lived here? Source: New York State Archives.</p>

          <article className="narrative">
            <p className="intro">This essay is based on a series of appraisal photographs taken by the State of New York, 1962-1964. Material culture depicted in these photographs, whether richly appointed domestic interiors or sparsely furnished rooming houses, reveal much about the people who inhabited those spaces.</p>

            <p>When originally constructed, the buildings seized by the State of New York were fashionable townhouses. The moldings, trim and woodwork all speak to quality craftsmanship. The carved marble fireplaces were impressive focal points in gracious rooms when these buildings were family homes. The original occupants were certainly people of means. I was surprised to see so much interior detailing still intact at least half a century after it ceased to be stylish. Many of the spaces retained late-19<sup>th</sup>/early- 20<sup>th</sup> century wallpapers which, while originally quite fashionable, must have looked horribly dated by 1960. It is interesting that no one had painted or papered over them rather than live surrounded by these patterns. This may speak to the straitened economic circumstances of the residents, restrictions placed by landlords, or to aesthetic sensibilities in keeping with the earlier style of decoration.</p>
            <p>I began my review of the images with only a limited knowledge of the community represented in the photographs. My goal was to see what the material culture revealed without being influenced by preconceived ideas regarding what I might find. Only after I finished my review, did I then consult additional sources including William Kennedy&rsquo;s O Albany!  These sources re-enforced the things I observed in the photographs<sup>1</sup>. I first reviewed all the interior images, not just those that were residential. Then I focused on the domestic images, even those where people had clearly moved out. It can be useful to see what people chose to leave behind, things considered not worth the effort of packing up and moving to a new location.</p>
            <p>As the buildings transitioned from single to multi-family dwellings, the spaces were carved up in ways that created real disparity among residents. In some buildings it appears that large gracious parlors continued to provide people with comfortable living rooms, while in other buildings these rooms were sectioned into bedrooms or even studio apartments. When larger rooms with very tall ceilings are divided into multiple smaller spaces, the impact on residents can be uncomfortable. For one thing, a small space with a high ceiling creates the feeling of being at the bottom of a well. For another, it is difficult to achieve a comfortable temperature. Heat will rise, leaving the floor level living area cold in the winter. And if there is no cross ventilation because of the partitioning, summer heat builds up quickly. Many of the apartments appear to be carved out of basements or cellars, which may have originally served as kitchen and other service areas when the buildings were new. As such, if there were windows in any of the rooms, they were at sidewalk level, providing residents a view of passing feet. Without even these small windows, the rooms were dark and probably dank. Having no means of venting, cooking odors would have permeated the spaces. In the buildings that were turned into rooming houses, conditions must have been extremely uncomfortable, especially for those living in the attic spaces, which historically even when new, were frigid in winter and sweltering in summer.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/parlor-bedroom.jpg"
              alt='meaningful alt text'/>
            <p className="caption">Former parlor sectioned off into a bedroom. Here a dropped ceiling has been added. Source: New York State Archives.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/kitchen.jpg"
              alt='meaningful alt text'/>
            <p className="caption">Spacious kitchen with a 1930s gas stove, 40s refrigerator and a contemporary dinette set. Source: New York State Archives.</p>

            <p>Kitchens and bathrooms were crammed into small, inadequate spaces. Some had windows while others were dark and airless. Even within a single building, kitchens varied in size and scale. For example, 23 Chestnut Street had at least three kitchens. One was spacious with a large window, an exterior door and an eat-in area furnished with a modern dinette set. Another was narrow but well equipped, and the third was tiny with very little workspace. Generally all the kitchen stoves and refrigerators appear to date from the 1940s, although there are definitely some from the 1930s and the 1960s. Small appliances such as electric skillets, toasters, and mixers are scattered here and there. There were no dishwashers, although in 1962, these were still not standard appliances even in middle-class suburban houses. One or two kitchens did have older washing machines tucked into the corner of the kitchen, and many still had freestanding hot water heaters dating from the early 20<sup>th</sup> century.  Several of the smaller studio apartments had tiny kitchenettes that could be closed off from the rest of the room by a set of doors. In these, the sinks, stoves, and refrigerators are lined up against a wall with a few metal cabinets positioned overhead, but there&rsquo;s no counter/prep space. When the doors were closed, you would think it was simply a closet.</p>
            <p>Some of the kitchens were crammed full of pots, pans, kettles, and other equipment indicative of extensive meal preparations. A lot of it appears to be relatively new shiny stainless steel of the type that was popular in the late 1950s/early &lsquo;60s. Clearly whoever cooked in these kitchens did not skimp on their tools. Decorative touches indicate that the cook took pleasure in her  surroundings. Photographs of the interior of a housewares store at 118 and 120 South Pearl Street show kitchenware and metal cupboards similar to those seen in many of the interiors. It is reasonable to surmise that residents shopped locally for their housewares.</p>
            <p>The bathrooms, for the most part, contained only tubs, no showers, although some are fitted out with ceiling rings and curtains used with a handheld shower attachment. The cast iron tubs date mostly from the early 20<sup>th</sup> century, free standing on little legs. The sinks and toilets are slightly later in date. While some of the kitchens are not substantially different from those found in single family suburban houses of the 1940s, all of the bathrooms appear substandard in comparison.</p>
            <p>In viewing the material goods captured in the photographs, it appears the demographics of the community included older residents and younger people with small children. This is based upon observation of spaces that included cribs and toys suitable for young children as well as spaces that show no evidence of children. There is little physical evidence of the type that would indicate families with adolescents and teens such as bikes, baseball bats, movie posters, school books, etc. (Interestingly enough, some of the exterior street photos do show pre-teen age children playing or gathered around the photographer.)  The apartments of the younger families (as evidenced by cribs and toys) are less densely furnished than those of the older residents, but the furniture is of contemporary design consistent with the time period.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/sparsely-furnished.jpg"
              alt='meaningful alt text'/>
            <p className="caption">Sparsely furnished interior of a young family&rsquo;s apartment. Source: New York State Archives.</p>

            <p>These furnishings are very similar to pieces seen in the neighborhood furniture stores. Other residents appear to have acquired an assortment of furnishings and décor over the course of a lifetime. While interiors with furniture dating to the 1920s, 30s, and 40s could be reflective of younger couples who  inherited an assortment of furnishings and other objects from family members or who purchased second-hand furniture, these interiors have more the feel of a purposeful accumulation over a long period of time.</p>
            <p>By looking at the interiors, unless there are people or framed photographs visible, there is no way to determine the race of the residents based upon their choice of furniture and décor. Black and white neighbors appear to have made similar furnishing choices, probably based upon economics. While most of the interior images are devoid of residents (excepting a few children, pets, and the occasional adult) there are indications in some of the restaurants and bars, such as Jim and Willie&rsquo;s Delux Bar-B-Q, that the owners and/or clientele were African American. On a side wall at Willie's, there is a liquor store calendar featuring a light-skinned African American woman. A poster for the Ebony Fashion Fair<sup>1</sup> hangs on the back wall of Champ&rsquo;s Grill.</p>
            
            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/delux-bbq.jpg"
              alt='meaningful alt text'/>
            <p className="caption">Champ&rsquo;s Grill. Source: New York State Archives.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/champs-grill.jpg"
              alt='meaningful alt text'/>
            <p className="caption">Source: New York State Archives.</p>

            <p>Most of the interiors contained some form of electronic entertainment device such as a TV, radio, or record player. Radios included large cabinet models from the 1930s and 40s and much smaller ones contemporaneous with the photographs. Most of the televisions were of more recent vintage dating from the late 1950s. Some households only had radios or TVs, while others had all three types of equipment. Generally, those households with all three types of equipment appeared to be younger families. Telephones do not feature prominently in the domestic interiors. Some of the restaurants and bars have phone booths, as did most commercial establishments in the 1960s.</p>
            <p>A number of photographs depict spaces in rooming houses. These are narrow, often airless rooms with just enough space for a twin bed, a table, and possibly a chair or a small chest of drawers. Sometimes there was a shelf on the wall and occasionally a sink. The tables often held hot plates and a few other items that indicate the resident was able to make a hot beverage or perhaps heat up a can of soup or stew. Many of these spaces were messy while others were quite tidy.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/rooming-house-room.jpg"
              alt='meaningful alt text'/>
            <p className="caption">A room in a Hamilton Street rooming house. Source: New York State Archives.</p>

            <p>The images of the domestic spaces reveal a neighborhood very much in flux. Some apartments and rooms have clearly been abandoned, perhaps for quite awhile. Wallpapers and paint are peeling from ceilings, walls, and floors. Toilets, sinks, and tubs, ripped free from their plumbing attachments, are dumped on the floor. Mold stains darken many of the walls. Large pieces of furniture such as bed frames and sofas, perhaps too cumbersome to move have been left behind, often overturned. It is difficult to know if these rooms were this rough when lived in or if they deteriorated rapidly once vacant. Other spaces depict families in transition, with packing materials in evidence and kitchen cupboards and shelves devoid of foodstuffs and cooking equipment. Still other photographs reveal residents who show absolutely no indication that they plan to go anywhere. They are firmly entrenched and their domestic spaces fully furnished, many with potted plants thriving on their windowsills.</p>
            <p>Frequently these intact residences contained religious iconography indicative of Christian, most probably Catholic, residents. These items include crucifixes and framed prints of the Madonna, the Pope, and Christ as well as an assortment of small statues of saints. While Protestants could certainly have chosen to own and display similar religious items, this type of display is typically associated with Catholic households. Some Protestant families might hang a cross in their home or perhaps a framed sampler of the Lord&rsquo;s Prayer, but usually the crucifix appeared only in Catholic households. Certainly the small religious statues of saints, the crucifixes, and the framed pictures strongly suggest Catholicism.<sup>2</sup></p>
            <p>Tidiness appears to be important to many of the residents. It is not known if these people had any warning that the photographers were coming, but for the majority of people who were not in the midst of packing, their homes suggest that neatness was a way of life.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/tidy-living-room.jpg"
              alt='meaningful alt text'/>
            <p className="caption">Tidy living room with contemporary furniture. Source: New York State Archives.</p>

            <p>Even when furnishings are meager, the beds are made, frequently with a spread of some sort and a decorative pillow or doll positioned at the head. If the spaces were tidied up in advance of the photographer, that tells us that people considered it important not to be caught with an unmade bed or a messy house. Some residents took additional steps to preserve their furnishings, particularly textiles, from soil and wear. In at least one dining room, a lace tablecloth is protected by a clear plastic one laid over the top.<sup>3</sup></p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/slip-cover.jpg"
              alt='meaningful alt text'/>
            <p className="caption">One of the residents of this house upholstered the seat of a mid-19th century parlor chair in damask (probably silk) fabric and then covered it with a fitted plastic slip cover. Source: New York State Archives.</p>

            <p>Crocheted or lace antimacassars are used extensively by some residents to protect the upholstery on chairs and sofas in a decorative manner.<sup>4</sup> This type of décor, along with lacy dresser scarves and table runners, tends to fade out by the early 1960s.</p>
            <p>The community revealed in this series of photographs is complex. The residents themselves are a diverse lot. Some people appear to be one step removed from homelessness. They may have a roof over their heads but just barely. This included those individuals occupying one of the many iron bedsteads crammed into the airless rooming houses as well as parents attempting to provide their children with food and a place to sleep. Other residents have established very modest homes for themselves that are certainly at the lower end of the socio-economic spectrum. Yet, mixed into this neighborhood are people living very middle-class lives. Except for the housing stock itself, these interiors are virtually indistinguishable from those found in 1950s middle-class suburbia including china cupboards filled with crystal and silver.</p>
            

            <h4>Notes</h4>
            <ol className="footnotes">
              <li>The Ebony Fashion Fair was a traveling fashion show started in 1958 by <em>Ebony Magazine</em>. It traveled the country stopping in large cities as well as smaller venues and showcased high fashion from top European and American designers. The producers used local African American models and provided residents the opportunity to see and purchase designer fashions they might not otherwise be able to access. The target audiences were middle- and upper-class African Americans and the money generated by ticket sales usually went to a charity. This poster is for an event taking place on Sept. 27, 1962, but the location of the venue isn&rsquo;t clear, and I have not been able to locate the travel schedules for 1962.</li>
              <li>For an extensive study of the material culture of religion see <em>Material Christianity: Religion and Popular Culture in America</em> by Colleen McDannell (Yale, 1995).</li>
              <li> In the 1950s many families protected their &ldquo;best&rdquo; upholstered furniture with clear plastic slipcovers. These were not the type of cheap drop cloths one might use today to cover furniture while painting. These covers were well made and fitted precisely to the individual piece of furniture complete with piping along the seams. The clear plastic allowed the fancy upholstery to show yet not suffer wear and tear.</li>
              <li>Prominent in the 19<sup>th</sup> century, antimacassars were originally placed on the backs of upholstered chairs where people rested their heads, to protect the fabric from the Macassar oil used as hair dressing. Eventually they were also used on the arms of chairs where people might rest their hands.</li>
            </ol>
          </article>
        </div>
      </section>
    </div>
  );

}

export default ThemeCampbell;