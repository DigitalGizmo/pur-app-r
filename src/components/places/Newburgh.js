import React, { useState } from 'react'; // , { useEffect }
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import { images, captionSections } from './NewburghContentSections';
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

  // const captionDissolves = () => {
  //   let captionSequence = [];
  //   for(let i = 0; i < captions.length; i++) {
  //     const presetHTML = <div dangerouslySetInnerHTML={{ __html: captions[i] }}></div>;
  //     captionSequence.push( 
  //       <InView 
  //         as="div" 
  //         // dangerouslySetInnerHTML={{ __html: captions[i] }}
  //         onChange={(inView, entry) => { 
  //           console.log('in CaptionDissolve onChange: ' + inView + ', i: ' + i);
  //           onChangeImage(inView, i); 
  //         }
  //         }>
  //         {/* dangerouslySetInnerHTML={{ __html: captions[i] }} */}
  //         {/* { captions[i].text } */}
  //         { presetHTML}
  //       </InView>  
  //       // <div>text: { captions[i].text }</div>
  //     );
  //   }
  //   return captionSequence;
  // }

  // const captionDissolves = captions.map((caption, index) => {
  let captionDissolves = (sectionIndex) => captionSections[sectionIndex].captions.map((caption, index) => {
      const presetHTML = `${caption.text}`;
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
                <h2>Newburgh from the Planner's Perspective</h2>
              </div>
              <AnimatePresence initial={false}>
                <motion.div
                  key={imageName}
                  initial={{ 
                    opacity: 0,
                    position: 'absolute',
                    // top: 104, // this works w main nav fixed
                    top: 72, // works w main nav scrolling away
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
          <h2 className='section-title'>{ captionSections[0].title}</h2>
          { captionDissolves(0) }
          <h2 className='section-title'>{ captionSections[1].title}</h2>
          { captionDissolves(1) }
          <h2 className='section-title'>{ captionSections[2].title}</h2>
          { captionDissolves(2) }
          <h2 className='section-title'>{ captionSections[3].title}</h2>
          { captionDissolves(3) }
        </div>{/*  /caption-panel */}

      </section> {/*  /chapter1 */}
    </div>
  );
} // end Newburg function

export default Newburgh;
