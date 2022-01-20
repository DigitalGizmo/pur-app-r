import React, { useState } from 'react'; // , { useEffect }
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import MainNav from '../common/MainNav';
import { images, captions } from './NewburghContent';
// import CaptionDissolve from './CaptionDissolve';
import './Newburgh.css';

const Newburgh = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageName, setImageName] = useState(images[imageIndex]);

  const onChangeImage = (isInView, imgIndex) => {
    console.log('in Newburgh onChangeImage: ' + isInView + ', i: ' + parseInt(imgIndex));
    if (isInView) {
      setImageIndex(imgIndex);
      setImageName(images[imgIndex]);
    }
  };

  const captionDissolves = captions.map((caption, index) => {
    const presetHTML = `<h4>${caption.title}</h4> ${caption.text}`;
    return (
       <InView 
        as="div" 
        dangerouslySetInnerHTML={{ __html: presetHTML }}
        onChange={(inView, entry) => { 
          console.log('in CaptionDissolve onChange: ' + inView + ', i: ' + index);
          onChangeImage(inView, index); 
        }}>
      </InView>          
    ) 
  });

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
                    top: 104, // don't know why +4 works
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
          { captionDissolves }
        </div>{/*  /caption-panel */}

      </section> {/*  /chapter1 */}
    </div>
  );
} // end Newburg function

export default Newburgh;
