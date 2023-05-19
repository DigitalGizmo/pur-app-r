import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import {
    useQuery,
    gql,
} from "@apollo/client"; 
import {motion, AnimatePresence } from 'framer-motion/dist/framer-motion'; // , useAnimation
import { Link } from 'react-router-dom';
import StuyFirst from './StuyFirst';
import StuyFourteenth from './StuyFourteenth';
import StuyFifteenth from './StuyFifteenth';

const StuyStroll = ({isSubPop}) => {
  // For street component transitions
  const [pageNum, setPageNum] = useState(1);
  // Direction 0 means 'forward', slide new in from right
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
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
  const [isMoreShowing, setIsMoreShowing] = useState(false);
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    if (!isSubPop) { changePageName('places');}
    document.title = 'Sidewalk Stroll: Gas House District';
  }, [changePageName, isSubPop])

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
    setIsMoreShowing(true);
  }

  function closeStrollMore () {
    setIsMoreShowing(false);
  }

  useEffect(() => {
    // console.log('direction: ' + direction);
    setPageNum(currentPage);
  }, [currentPage, direction])

  const onPageChange = (newPageNum, partID) => {
    // In case More box is up
    setIsMoreShowing(false);
    // Direction for transition
    const newDirection =  (newPageNum > currentPage) ? 0 : 1;
    // Have to useEffect because of closure on setState
    // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
    setDirection(newDirection);
    setCurrentPage(newPageNum);
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
                    slug
                    textPercent
                    hotspotX
                    hotspotY
                    hotspotR
                    zoomPercent
                    blurb
                    more
                    archiveItem {
                      slug
                    }
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
    // initial: {
    //   originX: 1,
    // },
    enter: {
      // At start, w direction 0, new image enters from right
      // x: direction === 0 ? xOffset : -xOffset,
      // position: 'absolute',
      
      originX: direction === 0 ? 0 : 1,
      rotateY: direction === 0 ? 50 : -50,
      x: direction === 0 ? '100%' : '-100%',
      // originX: 0,
      opacity: 0.2,
    },
    active: {
      x: 0,
      opacity: 1,

      rotateY: 0,
      // originX: 0.5,
      // originZ: -500,
      // originX: 1,

      transition: { delay: 0, duration: 2 },
      // transitionEnd: { position: 'absolute'}
    },
    exit:{
      // With direction 0 exit left
      // x: direction === 0 ? -xOffset : xOffset,
      
      // rotateY: -90,
      originX: direction === 0 ? 1 : 0,
      rotateY: direction === 0 ? -50 : 50,
      x: direction === 0 ? '-100%' : '100%',

      transition: { delay: 0, duration: 2 },
      opacity: 0.2,
      // position: 'absolute',
    }
  };

  return (
    <div 
    className="stroll-page"
    style={{
      perspective: 1000,
    }}       
    >

      {isSubPop ?
        <header className="basic-page">
          <h2>Sidewalk Stroll: The Gas House District</h2>
        </header>
      :
        <header className="basic-page">
          <nav>
            <p>
              <Link to="/">
                <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
                alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
              </Link> &gt; 
              Sidewalk Stroll: The Gas House District
            </p>
          </nav>
          {/* <div className="page-title">
            <h1>Sidewalk Stroll: The Gas House District - 1st Avenue &amp; 14th Street</h1>
            <h4>New York, NY</h4>
          </div> */}
        </header>
      }








      <AnimatePresence initial={false}>
      <motion.div

        style={{
          // top: 10,
          // left: 85,
          // originZ: -100,
          originZ: direction === 0 ? -15 : -10,
          // originX: 1,
          originX: direction === 0 ? 1 : 0
          // originX: 1,
        }}

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