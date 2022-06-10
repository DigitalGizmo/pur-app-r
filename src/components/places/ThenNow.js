import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ThenNowD3 from './ThenNowD3';

const ThenNow = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('places');
  }, [])

  return (
    <div className="">
      <header className="basic-page">
        <h1>Kingston: Before and After</h1>
      </header>

      <ThenNowD3 />

    </div>
  )
}

export default ThenNow;