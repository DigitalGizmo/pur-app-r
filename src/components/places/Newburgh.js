import React, { useState } from 'react'; // , { useEffect }
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import MainNav from '../common/MainNav';
import { images, contents } from './NewburghContent';
import './Newburgh.css';

const Newburgh = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageName, setImageName] = useState(images[imageIndex]);

  const onChangeImage = (isInView, imgIndex) => {
    if (isInView) {
      setImageIndex(imgIndex);
      setImageName(images[imgIndex]);
    }
  };

  // const captions = contents.map(({ label, title, text }, index) => {
  //   return (
  //     <InView 
  //       key={label}
  //       as="div" 
  //       onChange={(inView, entry) => { onChangeImage(inView, {index} ) }}>
  //         <h4>{title}</h4>
  //         {text}
  //     </InView>          
  //   )
  // });

  // console.log('captions: ' + captions);

  return (
    <div>

      {/*   main nav(app.js) and chapter title should be pinned; 
        also improve markup to use header element
      */}

    <section id="chapter1" className='main-section'> 
        
      <div id="image-sequence1" className="image-panel"> 
          <div className='image-panel-outer-div'>
            <MainNav />
            <div id="chapter1-title" className="chapter-title">
              <h2>Newburgh from the Planner's Perspective</h2>
            </div>
            <AnimatePresence initial={false}>
              <motion.div
                key={imageName}
                initial={{ 
                  opacity: 0,
                  position: 'absolute',
                  top: 100,
                  left: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0, duration: 1 },
                  transitionEnd: { position: 'static'}
                }}
                exit={{ 
                  opacity: 0,
                  position: 'static',
                  transition: { delay: 0, duration: 1 }
                }}                
              >
                <img 
                  alt={imageName}
                  src={`http://dev.picturingurbanrenewal.org/prod-assets/places/newburgh/images/${imageName}.jpg`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
      </div>{/*  /image-panel */}

      <div id="caption-sequence1" className="caption-panel">
        {/* { captions } */}

        <InView 
          as="div" 
          onChange={(inView, entry) => {
            console.log('Inview:', inView);
            onChangeImage(inView, 0);
            }}>
          <h4>The View from Above</h4>
          <p className="gallery-text">Looking down on East Newburgh, urban planners saw blighted buildings, obsolete land-use patterns, and an outdated street grid. The city&rsquo;s population, as well as its tax base, was in decline. The planners&rsquo; solution to this cluster of problems was to start over from scratch.</p>
        </InView>  

        <InView 
          as="div" 
          onChange={(inView, entry) => {
            onChangeImage(inView, 1);
            }}>
          <p className="gallery-text">This was the logic of urban renewal: Demolition of existing homes and shops was the first step toward transforming a blighted area. Once cleared, small lots could be repackaged into larger parcels for sale to private developers. Those developers would build modern housing and commercial developments. New people (whiter and wealthier than their predecessors) would move into the new homes. New businesses would rent space in the commercial structures. These new businesses and residents would stabilize municipal finances.</p>
        </InView>          

        <InView 
          as="div" 
          onChange={(inView, entry) => {
            onChangeImage(inView, 2);
            }}>
          <h4>The Appraiser&rsquo;s Advice</h4>
          <p className="gallery-text">In 1964, when Newburgh&rsquo;s city council hired the planning firm of David Rosen Associates, urban renewal was already underway.</p>
        </InView>          

        <InView 
          as="div" 
          onChange={(inView, entry) => {
            onChangeImage(inView, 3);
            }}>
          <p className="gallery-text">The planning firm&rsquo;s job was to assess the &ldquo;feasibility&rdquo; of expanding the urban renewal area.</p>
        </InView>          

      </div>{/*  /caption-panel */}

  </section> {/*  /chapter1 */}

    </div>
  );
} // end Newburg function

export default Newburgh;
