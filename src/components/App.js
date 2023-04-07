import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom'; // , Link
import { GlobalPageNameStateContext } from '../context/GlobalState';
// import MainNav from './common/MainNav';
import BottomNav from './common/BottomNav';

function App() {
  const currPage = useContext(GlobalPageNameStateContext);

  return (
    <div >
      {/* { currPage !== "home" &&
        <MainNav/>
      } */}

      <Outlet 
        message="test message"
        />

      { currPage !== "home" &&
        <BottomNav/>
      }
    </div>
  );
}

export default App;


 
