const localToggleAll = () => {
  if (localStorage.getItem('toggleAll') == null) {
    return false
  } else {
    return JSON.parse(localStorage.getItem('toggleAll'))
  }
}

export default localToggleAll;