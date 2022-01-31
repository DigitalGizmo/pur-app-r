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
  const [pageNum, setPageNum] = useState(1);
  // Direction 0 means 'forward', slide new in from right
  const [[currentPage, direction], setCurrentPage] = useState([1,0]);
  const [partID, setPartID] = useState(2);

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
    query getHotspots ($interactive_part_id: Int){
      hotspots(interactive_part_id: $interactive_part_id){
        title
        blurb
        text_percent
        hotspot_x
        hotspot_y
        hotspot_r
        more
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_HOTSPOTS, { variables: { interactive_part_id: partID } }
  );

  // const xOffset = 1000;
  const variants = {
    enter: {
      // At start, w direction 0, new image enters from right
      // x: direction === 0 ? xOffset : -xOffset,
      x: direction === 0 ? '100%' : '-100%',
      opacity: 0.2,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: .75, duration: 0.75 }
    },
    exit:{
      // With direction 0 exit left
      // x: direction === 0 ? -xOffset : xOffset,
      x: direction === 0 ? '-100%' : '100%',
      transition: { delay: 0, duration: 0.75 },
      opacity: 0.2
    }
  };

  return (
    <div className="menu-page"> {/*Don cheating and borrowing menu-page */}
      <header>
        <h2>Stroll By: 1st Avenue and 14th Street</h2>
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
          data = {data}
          onPageChange = {onPageChange}
        />}

        { (pageNum === 3) && 
        <StuyFourteenth 
          loading = {loading}
          error = {error}
          data = {data}
          onPageChange = {onPageChange}
        />}

      </motion.div>
      </AnimatePresence>

    </div>
  );
}

export default StuyStroll;