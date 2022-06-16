import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const ThemeZipp = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('themes');
  }, [])

  return (
    <div>
      <header className="basic-page">
        <h1>Ghost City: MetLife&rsquo;s Gas House District Photos</h1>
        <h4>Samuel Zipp, Director of the Urban Studies Program, Professor of American Studies and Urban Studies, Brown University</h4>
      </header>

      <section>
        <div className="image-full">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/gasworks.jpg"
              alt='meaningful alt text'/>
        </div>

        <div className="theme">
          <p className="caption first">The district was named for the gas towers, shown here looming above 20th Street and 1st Avenue. Source: MetLife Archives.</p>
          <article className="narrative">
        
            <p className="intro">In 1943, the Metropolitan Life Insurance Company announced that it would knock down an eighteen-block area of Lower Manhattan known as the Gas House District to build a new, modern housing development called Stuyvesant Town. At that time, it might have seemed that the company took almost no interest in the old neighborhood. The Gas House District appears as little more than an afterthought in MetLife&rsquo;s official proclamations, a messy past to be transcended. The neighborhood, MetLife executive Frederick Ecker said, was a &ldquo;blighted, run-down, dilapidated area.&rdquo; The verdict was simple: it was a drain on the city&rsquo;s fiscal health. It belonged wholly to the past. These public judgments focused on financial characteristics, in particular the neighborhood&rsquo;s damaged viability for investment and economic growth. In addition to labeling the Gas House District “blighted,&rdquo; an artifact of economic obsolescence, MetLife sought to <em>show</em> that it was also a “slum,&rdquo; a source of social and not merely economic problems. </p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/a-and-14th.jpg"
              alt='meaningful alt text'/>
            <p className="caption">The corner of 17th Street and Avenue C. Source: MetLife Archives.</p>

            <p>In fact, MetLife took a very pointed and particular interest in the area. Even as they prepared to erase its actual buildings and streets from city maps, company officials took steps to preserve the District, or at least a reasonably accurate two-dimensional facsimile of the neighborhood. The Gas House District still exists today in one frozen, virtual form: a collection of photographs owned by MetLife. This ghostly archive, record of a lost and all-but-forgotten city, is a minute and careful visual account of every building, storefront, corner, vacant lot, sidewalk, and billboard in the eighteen blocks between 1st Avenue, 14th Street, 20th Street, and Avenue C as they looked in the Spring and Summer of 1943, just after MetLife announced they would knock it all down for Stuyvesant Town.</p>
            <p>The unknown photographer or photographers who made these images strived for coverage, not art. They were charged with capturing a complete visual record of physical assets the company would soon purchase or take through eminent domain. For the most part, these images are a prosaic succession of streetscapes. Most are shot head-on from the street or opposite sidewalk; some are turned at an angle to capture as much frontage as possible in one frame. They are both portraits and backdrops. They reveal the personality or character of buildings as if their facades were faces, while also serving as stages for lost and forgotten dramas.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/garage-church.jpg"
              alt='meaningful alt text'/>
            <p className="caption">St. Mary Magdalen Roman Catholic Church once stood next door to John Szucs&rsquo;s auto repair shop. Source: MetLife Archives.</p>

            <p>In one way they are the ultimate in documentary, even more the mute records of reality than most photographs given that classification. They feel artless and without agenda, sometimes even dashed off and hurried through. But they do have a purpose. The effect of the whole archive is measured rather than hurried, one of counting, amassing, taking down physical facts in a visual ledger book, making a visual account of property. They were &ldquo;taken&rdquo; simply to legitimize MetLife&rsquo;s eminent domain &ldquo;takings.&rdquo; The photos operate like a visual analogue of ownership, a record to equal and buttress those stored in the company&rsquo;s rent rolls, record books, and actuarial tables.</p>
            <p>Like many architectural photos, these pictures are largely devoid of people. When people do appear, it is often as blurry movement interrupting the stillness. Their lives or concerns are beside the point. The images also do not make use of the relations of buildings in space to tell a story of the changing cityscape. They do not make use of angles, light, or distance to reveal disjuncture, loss, or novelty. One by one, frame by frame, they seem to reveal only the facts of their contents. They show change only in hindsight and all together as a set, when the viewer knows that everything there is now gone. The neighborhood is caught and held in stasis&mdash;all possibility of change, save destruction, permanently arrested by the camera&rsquo;s power.</p>
            <p>At their heart, the images were a form of evidence, and MetLife used them this way. Not only did they demonstrate ownership, they acted as proof of the neighborhood&rsquo;s decline. The company took individual images out of the archive to distribute to newspapers or for their own promotional materials, using them to make visual arguments establishing the incontrovertible difference between the old tenement neighborhood and the new towers MetLife would build there. The photographer or photographers also made sure to venture off the streets, into the back yards and crumbling, largely abandoned rear tenements to find images of urban squalor and deprivation. They brought back pictures of trash-strewn yards, children playing in rubble, flapping laundry, and a bum sleeping it off in a doorway. These images, sprinkled here and there in the archive, did more than the innocuous streetscapes to naturalize the inevitable logic of Met Life&rsquo;s benevolent intervention.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/homeless-man.jpg"
              alt='meaningful alt text'/>
            <p className="caption">A man asleep in a Gas House District doorway. Source: MetLife Archives.</p>

            <p>For instance, when one of these photos of a tenement back yard was given the caption, &ldquo;A dirty and unsightly tangle of tenements,&rdquo; on a page titled, &ldquo;Time moves on and a city grows,&rdquo; in a 1951 promotional booklet distributed to Stuyvesant Town residents, it assured its readers that their homes had a beneficent purpose. &ldquo;Possessed of few of the assets which modern housing standards require,&rdquo; the booklet reassured them, &ldquo;the neighborhood slowly settled into obsolescence.&rdquo; Embedded in the rhetoric of inevitable succession that was commonly used to make urban renewal the common sense model of urban progression, these photos almost spoke for themselves. They stood naturally for a past to be erased.</p>
            <p>The bulk of the images are not so strident, and on their own, one by one, hardly so one-dimensional. MetLife could depict the Gas House District as a fixed entity by selecting particular images from the archive and embedding them in pre-ordained scripts. But taken outside that framing, these photographs resist the homogeneity of stasis. They do depict an actual world that once existed, but in freezing that world, they also allow the viewer to see the various, diverse, and particular character of the neighborhood, not only its arrested development. The pictures capture endless mute stories, little mundanities that nevertheless convey the neighborhood&rsquo;s lingering vitality. The streets, while not deserted, have a lonely feel. There are few cars, and pushcart vendors and horse-drawn wagons are not uncommon. Ominously, the Metropolitan Life tower drifts hazily in the distance over some of the westernmost blocks. But it seems too small and far away for residents to notice or fear, just part of a distant skyline that hardly seems to have anything to do with the fate of this neighborhood. In these photos, this place seems withdrawn, out of place in the world&rsquo;s greatest metropolis.</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/reading-kids.jpg"
              alt='meaningful alt text'/>
            <p className="caption">A group of children read comic books in a rubble-strewn backyard. Clothes lines are visible in the distance. Source: MetLife Archives.</p>

            <p>Still, the neighborhood is not dead. The six or seven blocks in the northeastern corner, those with the highest concentration of small industrial shops, car yards, and abandoned lots, have a desolate feel to them, but the businesses are largely functioning and active. The other two-thirds of the neighborhood may not be bustling, but much of it looks almost prosperous. With the benefit of hindsight, the dense mix of business, residence, and industry&mdash;anathema to city planning&rsquo;s conventional wisdom at the time&mdash;make for a rich mixed-use and mixed-class streetscape. Many of the four- and five-story tenements that line the streets look kept up, as do other odd, older houses mixed in here and there. Abandoned buildings do not abound, although they are not rare, either. There are at least two theaters, a Murray&rsquo;s five-and-dime store, numerous ornate churches, and two schools. Billboards advertise War Loans. American flags hang from fire escapes. Many families have service stars in their windows, and the camera catches the bottom half of a banner strung across 15th Street: &ldquo;God Bless Our Boys.&rdquo; On the corner of 15th Street and 1st Avenue, the photographer finds a man bent at the knee examining a sign in the window of Williams Furniture Shop. &ldquo;Tenants, Owners, Business Men,&rdquo; reads a notice from the Peter Stuyvesant Landowners Group, &ldquo;Do you want to stay in your neighborhood? Go to the public hearing against Metropolitan.&rdquo; Hanging next to it is a clipping from the May 27, 1943 issue of <em>P.M.</em> magazine headlined, &ldquo;Shocked Experts Call for Brakes On Fantastic &lsquo;MetLife&rsquo; Housing.&rdquo;</p>

            <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/themes/images/notice-in-window.jpg"
              alt='meaningful alt text'/>
            <p className="caption">A man stops in front of Williams Furniture to read about Stuyvesant Town and residents&rsquo; protest plans. Source: MetLife Archives.</p>

            <p>Almost against their will, the photographs reveal that many Gas House District residents were not willing to accept the official verdict about their neighborhood. As reporters who surveyed the neighborhood discovered, residents looked on the place with simple affection, despite poverty and a declining population base. The neighborhood was the setting for the great events of ordinary life, and had become as precious to them as the people with whom they&rsquo;d shared their lives. &ldquo;My husband died here,&rdquo; lamented Mrs. Concetta Tornabene to a <em>Herald-Tribune</em> reporter, &ldquo;and I want to die here too.&rdquo; &ldquo;It hurts when you pass by and see it,&rdquo; another woman said of the ruins left in the wake of the early demolition, &ldquo;like a knife stabbing your heart.&rdquo; Mary Kenney, a 59-year-old matron on Welfare Island, lived across the hall from Vito Cali, an Italian widower. They each had a four-room cold-water flat with a common toilet in the hallway. The doors were always open, and Ms. Kenney considered Cali&rsquo;s three sons and one daughter her own children. &ldquo;I only hope we can stay here ‘til our son comes back,&rdquo; she said, referring to Vito Jr., who was a mechanic with the Army Air Force in India.</p>
            <p>MetLife threatened what one group of social workers called the &ldquo;strong emotional ties to the familiar neighborhood,&rdquo; as well as informal economic and social interconnections built over time. Residents felt &ldquo;a tenacious attachment to the neighborhood and a sense of belonging together, a feeling of solidarity which made them in fact a real community.&rdquo; In the short run, national and citywide support for urban redevelopment cleared the way for MetLife to move forward with its plans. But this lost archive and the ghost city it captures reveals faint traces of the complex social worlds imperiled by &ldquo;slum clearance&rdquo;&mdash;and the kinds of urban life people would soon try to protect from the urban renewal bulldozers.</p>
          
            <p>This essay is adapted from Samuel Zipp, <em>Manhattan Projects: The Rise and Fall of Urban Renewal in Cold War New York</em> (NY: Oxford, 2010).</p>
          </article>
        </div>
      </section>
    </div>
  );

}

export default ThemeZipp;