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