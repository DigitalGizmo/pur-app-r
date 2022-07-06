// Used in StuyStroll so that the resize calculation
// only happens once a second. StuyFirst and StuyFourteenth.js
function debounce(func, milSecs) {
  let timer;
  return () => {
    timer = setTimeout(() => { // eslint-disable-line
      timer = null;  // eslint-disable-line
      func.apply(this, arguments)
    }, milSecs)
  }
}

export {debounce};