const useLocal = () => {
  if (localStorage.getItem('todos') == null) {
    return []
  } else {
    return JSON.parse(localStorage.getItem('todos'))
  }
}

export default useLocal;