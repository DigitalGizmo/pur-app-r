import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom'; // , Link
import {GlobalProvider, GlobalContext } from '../context/GlobalState';
import MainNav from './common/MainNav';
import BottomNav from './common/BottomNav';

function App() {
  const { currPage } = useContext(GlobalContext);

  return (
    <div >
      <GlobalProvider>
        {/* { currPage !== "home" && */}
        { 1 !== 2 &&
          <MainNav/>
        }

        <Outlet 
          message="test message"
          />
        <BottomNav />
        <p>debug currPage: {currPage}</p>

      </GlobalProvider>
    </div>
  );
}

export default App;


 
