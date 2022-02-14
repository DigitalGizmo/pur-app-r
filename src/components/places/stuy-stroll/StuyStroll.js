import React, { useState, useEffect } from 'react'; // , { useState }
import {
    useQuery,
    gql,
} from "@apollo/client"; 
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
import StuyFirst from './StuyFirst';
import StuyFourteenth from './StuyFourteenth';
import StuyFifteenth from './StuyFifteenth';
import "./StuyStroll.css";

const StuyStroll = () => {
  // For street component transitions
  const [pageNum, setPageNum] = useState(1);
  // Direction 0 means 'forward', slide new in from right
  const [[currentPage, direction], setCurrentPage] = useState([1,0]);
  // const [partID, setPartID] = useState(2);
  // For hotspot handling. Ideally per data hotspot length,
  // but here hard-wired past imagined mas.
  const BASE_HIGHLIGHTS = [
    false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false 
  ];
  const [highlights, setHighlights] = useState(BASE_HIGHLIGHTS);
  const [highlightIndex, setHiglightIndex] = useState(0);
  const [isMoreShowing, setStrollMoreOn] = useState(false);

  const hoverSpot = (index) => {
    let newHighlights = [...BASE_HIGHLIGHTS];
    newHighlights[index] = true;
    setHighlights(newHighlights);
  }

  const unHoverSpot = () => {
    setHighlights(BASE_HIGHLIGHTS);
  }

  const showStrollMore = (index) => {
    setHiglightIndex(index);
    console.log('- highlightIndex: ' + highlightIndex);
    setStrollMoreOn(true);
  }

  function closeStrollMore () {
    setStrollMoreOn(false);
  }

  useEffect(() => {
    setPageNum(currentPage);
  }, [currentPage, direction])

  const onPageChange = (newPageNum, partID) => {
    const newDirection =  (newPageNum > currentPage) ? 0 : 1;
    // Have to useEffect because of closure on setState
    // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
    setCurrentPage([newPageNum, newDirection]);
  }

  const GET_HOTSPOTS = gql`
    query {
      interactive (id: "SW50ZXJhY3RpdmVOb2RlOjE=") {
        slug,
        interactiveParts {
          edges {
            node {
              slug,
              hotspots {
                edges {
                  node {
                    ordinal
                    title
                    textPercent
                    hotspotX
                    hotspotY
                    hotspotR
                    blurb
                    more
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_HOTSPOTS
  );

  const variants = {
    enter: {
      // At start, w direction 0, new image enters from right
      // x: direction === 0 ? xOffset : -xOffset,
      // position: 'absolute',
      x: direction === 0 ? '100%' : '-100%',
      opacity: 0.2,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0, duration: 0.75 },
      // transitionEnd: { position: 'absolute'}
    },
    exit:{
      // With direction 0 exit left
      // x: direction === 0 ? -xOffset : xOffset,
      x: direction === 0 ? '-100%' : '100%',
      transition: { delay: 0, duration: 0.75 },
      opacity: 0.2,
      // position: 'absolute',
    }
  };

  return (
    <div> {/*Don cheating and borrowing menu-page */}
      <header className="basic-page stroll">
        <h1>Stroll By: 1st Avenue and 14th Street</h1>
      </header>

      <AnimatePresence initial={false}>
      <motion.div
        key={pageNum}
        variants={variants}
        initial="enter"
        animate="active"
        exit="exit"
      >
        { (pageNum === 1) && 
        <StuyFifteenth 
          onPageChange = {onPageChange}
        />}

        { (pageNum === 2) && 
        <StuyFirst 
          loading = {loading}
          error = {error}
          interactivePart = { data.interactive.interactiveParts.edges[0] }
          onPageChange = {onPageChange}
          highlights = {highlights}
          hoverSpot = {hoverSpot}
          unHoverSpot = {unHoverSpot}
          showStrollMore = {showStrollMore}
          isMoreShowing = {isMoreShowing}
          highlightIndex = {highlightIndex}
          closeStrollMore = {closeStrollMore}
        />}

        { (pageNum === 3) && 
        <StuyFourteenth 
          loading = {loading}
          error = {error}
          interactivePart = { data.interactive.interactiveParts.edges[1] }
          onPageChange = {onPageChange}
          highlights = {highlights}
          hoverSpot = {hoverSpot}
          unHoverSpot = {unHoverSpot}
          showStrollMore = {showStrollMore}
          isMoreShowing = {isMoreShowing}
          highlightIndex = {highlightIndex}
          closeStrollMore = {closeStrollMore}
        />}

      </motion.div>
      </AnimatePresence>

    </div>
  );
}

export default StuyStroll;