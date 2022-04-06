import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  currPage: "home"
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state

  function changePageName(pageName) {
    dispatch({
      type:'CHANGE_PAGE',
      payload: pageName
    });
  }

  return(
    <GlobalContext.Provider value = {{ 
      currPage: state.currPage, changePageName }}>
        {children}
    </GlobalContext.Provider>
  )
}