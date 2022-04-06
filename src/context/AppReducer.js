// import React from 'react';

export default (state, action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return {
        currPage: action.payload
      }
    default:
      return state;
  }
}