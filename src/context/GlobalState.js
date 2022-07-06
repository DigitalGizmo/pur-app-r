import React, { createContext, useState } from 'react'; // useReducer

export const GlobalPageNameStateContext = createContext();
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [currPage, changePageName] = useState('home');

  return(
    <GlobalPageNameStateContext.Provider value={currPage}>
      <GlobalContext.Provider value = {{ changePageName }}>
          {props.children}
      </GlobalContext.Provider>
    </GlobalPageNameStateContext.Provider>
  )
}
