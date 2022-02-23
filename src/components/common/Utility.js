function debounce(func, milSecs) {
  let timer;
  return () => {
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments)
    }, milSecs)
  }
}

function getNewChosenArray(event, idArray) {
  event.preventDefault();
  let newIdArray = [...idArray];
  if (event.target.checked){
    newIdArray = [...idArray, parseInt(event.target.value)];
  } else {
    const indexToRemove = idArray.indexOf(parseInt(event.target.value));
    newIdArray.splice(indexToRemove, 1);
  }
  return newIdArray;
} 

// export {checkboxListById}
export {getNewChosenArray};
export {debounce};