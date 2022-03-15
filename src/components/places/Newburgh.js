import React, { useState } from 'react'; // , { useEffect }
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import { images, captions, sectionTitles } from './NewburghContent';
// import CaptionDissolve from './CaptionDissolve';

const Newburgh = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageName, setImageName] = useState(images[imageIndex]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(sectionTitles[titleIndex]);

  const onCaptionChange = (isInView, imgIndex, titleIndex) => {
    // console.log('-- onCaptionChange: ' + isInView + ', i: ' + parseInt(imgIndex));
    if (isInView) {
      // if (titleIndex) { 

      setTitleIndex(titleIndex) 
      setSectionTitle(sectionTitles[titleIndex]) 
      // console.log('sectionTitle index: ' + titleIndex);
      // };
      setImageIndex(imgIndex);
      setImageName(images[imgIndex]);
    }
  };

  const captionDissolves = captions.map((caption, index) => {
  // let captionDissolves = (sectionIndex) => captionSections[sectionIndex].captions.map((caption, index) => {
    // key = caption.label;
    // Handle the caption itself
    const presetHTML = `${caption.text}`;
    return (
      <InView 
        key={caption.label}
        as="div" 
        dangerouslySetInnerHTML={{ __html: presetHTML }}
        onChange={(inView, entry) => { 
          // console.log('in CaptionDissolve onChange: ' + inView + ', i: ' + index);
          // Handle conditional title change
          onCaptionChange(inView, index, caption.titleIndex); 
        }}>
      </InView>          
    ) 
  })

  return (
    <div>
      {/*   main nav(app.js) and chapter title should be pinned; 
        also improve markup to use header element
      */}
      <section id="chapter1" className='main-section'> 
          
        <div id="image-sequence1" className="image-panel"> 
            <div className='image-panel-outer-div'>
              <div id="chapter1-title" className="chapter-title">
                <h1>Newburgh from the Planner's Perspective</h1>
              </div>
              <AnimatePresence initial={false}>
                <motion.div
                  key={imageName}
                  initial={{ 
                    opacity: 0,
                    position: 'absolute',
                    // top: 104, // this works w main nav fixed
                    top: 86, // works w main nav scrolling away
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
              <h2 className="section-title">
                { sectionTitle }
              </h2>
            </div>
        </div>{/*  /image-panel */}

        <div id="caption-sequence1" className="caption-panel">
          {/* { captionDissolves(0) } */}
          { captionDissolves }
          {/* { captionDissolves(1) }
          { captionDissolves(2) }
          { captionDissolves(3) } */}
        </div>{/*  /caption-panel */}

      </section> {/*  /chapter1 */}
    </div>
  );
} // end Newburg function

export default Newburgh;
