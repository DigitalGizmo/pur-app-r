// Used in StuyStroll so that the resize calculation
// only happens once a second. StuyFirst and StuyFourteenth.js
function debounce(func, milSecs) {
  let timer;
  return () => {
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments)
    }, milSecs)
  }
}

export {debounce};