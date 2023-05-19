import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
// import KingstonComponent from "https://framer.com/m/KingstonComponent-VqYd.js@KoQOsYcwFc3xzdnYIFEX";
// import KingstonComponent from './KingstonComonent';
// import ScrollTest from "https://framer.com/m/ScrollTest-cMx5.js@zxWEZHsHxNc93QAUUMob"

const Kingston = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('places');
    document.title = 'Kingston - Best Laid Plans';
  }, [changePageName])

  return (
    <div className="kingston-scroll"> 
      <header className="basic-page">
        <h1>Kingston: Best Laid Plans&hellip;</h1>
      </header>  

      <iframe 
        title = "Kingston"
        style={{border: `none`}} 
        width="1250" height="850" 
        src="https://framer.com/embed/Kingston-2--99GNo549S11L9sLBQ7Zb/LreYDatxk?highlights=0" 
      >
      </iframe>      

    </div>
  );
}

export default Kingston;