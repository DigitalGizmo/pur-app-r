import React, { useState } from 'react'; // , { useEffect }
// import React from 'react';
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
// import { useInView } from "react-intersection-observer";

// const imageVariants = {
//     visible: { opacity: 1, transition: { duration: 1 }},
//     hidden: { opacity: 0.1}
// };

const Newburgh = () => {
  const [imageName, setImageName] = useState('newburgh-aerial-1')

  const onChangeImage = () => {
    console.log('got to onChangeImage');
    setImageName('newburgh-guided-map1-title');
  }

  return (
    <div>
    <header className="basic-page">
        <h1>Title</h1>
        <h4>Newburgh</h4>
        <button onClick={() => onChangeImage()}>
          change image
        </button>
    </header>

    <section id="chapter1"> 
        
      <div id="image-sequence1" className="image-panel"> 
          {/* image-1a */}
          <div>
            <AnimatePresence>
              <motion.img
                key={imageName}
                src={`http://dev.picturingurbanrenewal.org/prod-assets/places/newburgh/images/${imageName}.jpg`}
                alt="aerial view of Newburgh"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0}}
                transition={{ duration: 1 }}
                // layoutId={`unique`}
              />
            </AnimatePresence>
          </div>
      </div>{/*  /image-panel */}

      <div id="caption-sequence1" className="caption-panel">

          <motion.div
            animate={{ x: ['100px', '0px', '100px']}}
          >{/*  text-1a */}
              <h4>The View from Above</h4>
              <p className="gallery-text">Looking down on East Newburgh, urban planners saw blighted buildings, obsolete land-use patterns, and an outdated street grid. The city&rsquo;s population, as well as its tax base, was in decline. The planners&rsquo; solution to this cluster of problems was to start over from scratch.</p>
          </motion.div>

          <div>{/*  text-1b */}
              <p className="gallery-text">This was the logic of urban renewal: Demolition of existing homes and shops was the first step toward transforming a blighted area. Once cleared, small lots could be repackaged into larger parcels for sale to private developers. Those developers would build modern housing and commercial developments. New people (whiter and wealthier than their predecessors) would move into the new homes. New businesses would rent space in the commercial structures. These new businesses and residents would stabilize municipal finances.</p>
          </div>

          <motion.div 
            animate={{ x: '100px'}}
            >{/*  text-2a */}
              <h4>The Appraiser&rsquo;s Advice - debug: waypoint trigger</h4>
              <p className="gallery-text">In 1964, when Newburgh&rsquo;s city council hired the planning firm of David Rosen Associates, urban renewal was already underway.</p>
          </motion.div>

          <div>{/*  text-2b */}
              <p className="gallery-text">The planning firm&rsquo;s job was to assess the &ldquo;feasibility&rdquo; of expanding the urban renewal area.</p>
          </div>

          <div>{/*  text-2c */}
              <p className="gallery-text">Justifying this expansion was an earlier analysis by real estate appraiser Humes Flynn. In 1961, Mr. Flynn wrote that the earlier Water Street Urban Renewal Project, &ldquo;is only the beginning. The project will be a miserable failure if a future project does not extend from South Street to Water Street on both sides of Smith  and High Streets, and also should include First Street, both sides of Colden Street and South Water Street from Water Street to Washington Street. These areas must in the very near future be demolished, or whatever is built in the present area will be greatly reduced in value and effectiveness by the condition of the properties in the surrounding areas.&rdquo;
              </p>
          </div>

          <div>{/*  text-3 */}
              <h4>The East Newburgh Urban Renewal Area</h4>
              <p className="gallery-text">The East Newburgh Urban Renewal Area included some of the oldest sections of the city. It was once home to Newburgh&rsquo;s white elite. That was no longer true by 1960.<br/>Between 1950 and 1960, the city&rsquo;s Black population more than doubled. Many were Southern migrants, part of what is known as the Great Migration. Between World War I and the 1970s, roughly six million African Americans moved from the rural South to the urban North in search of a better life. In Newburgh, these migrants made their homes in the eastern section of the city. (White property owners prevented them from settling anywhere else.)<br/>During the same period of time, white city residents moved from east to west or to the suburbs. Federally-backed mortgages facilitated these moves, described collectively as white flight.</p>
          </div>

          <div>{/*  text-4a image: plain map3*/}
              <h4>Good, Fair, Deteriorating, Deteriorated</h4>
              <p className="gallery-text">
              The planners started with the assumption that &ldquo;blight and deterioration&rdquo; were rampant in the renewal area.</p>
          </div>

          <div>{/*  text-4b image: map 3 with categories highlighted*/}
              <p className="gallery-text">
              Most of the buildings on this map were classified as &ldquo;deteriorating&rdquo; or &ldquo;deteriorated.&rdquo; 
              </p>
          </div>

          <div>{/*  text-5a image: map 3 with poor condition photos*/}
              <h4>Missing from the Planners&rsquo; Perspective</h4>
              <p className="gallery-text">
              Contemporary photographs show that many East Newburgh buildings were in poor condition. In part this was due redlining. Redlining was the practice of restricting bank financing to white borrowers and middle-class neighborhoods. But redlining doesn&rsquo;t completely explain this map.</p>
          </div>

          <div>{/*  text-5b image: map 3 with better condition photos*/}
              <p className="gallery-text">
              David Rosen later admitted that he and his colleagues missed some well-maintained properties in the renewal area.</p>
          </div>
              
          <div>{/*  text-5c image: map 3 with better condition photos*/}
              <p className="gallery-text">
              They also missed what these places (no matter their condition) meant to the people who lived, worked, played, and prayed there.
              When urban planners looked at people living in renewal areas, they saw households to be counted and moved somewhere else.
              The neighborhood ties that bound people together were beyond the scope of planning studies. Severing these ties would prove devastating to displaced communities in Newburgh and across the nation.</p>
          </div>

          <div>{/*  text-6a image: Hodges Home & Funeral Parlor*/}
              <h4>The Homeowners&rsquo; Perspective</h4>
              <p className="gallery-text">Addressing a public meeting of the Newburgh Urban Renewal Agency in 1967, Kathleen Hodge stated flatly that she did not want to move. Her elegant, historic home also housed the Hodge family funeral parlor.
              While the Hodge home and business escaped the bulldozer, most area residents were not so lucky.</p>
          </div>

          <div>{/*  text-6b image: Williams Home*/}
              <p className="gallery-text">Mattie Williams attended the same meeting. The 67-year-old widow owned two Montgomery Street houses. One was her home, the other, a rental property.

              When it was her turn to speak, Mrs. Williams emphasized the inequity of urban renewal. She pointed out that &ldquo;the heart&rdquo; of the renewal area was in the heavily segregated city&rsquo;s &ldquo;Negro section.&rdquo; Those facing displacement &ldquo;are our people,&rdquo; she said. &ldquo;They are not your people.&rdquo;

              The lack of housing for displaced residents was another problem, one agency representative acknowledged. His statement, according to the minutes, received &ldquo;the first applause of the evening.&rdquo;</p>
          </div>


      </div>{/*  /caption-panel */}

  </section> {/*  /chapter1 */}




    </div>
  );
} // end class

export default Newburgh;
