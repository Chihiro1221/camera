export default () => {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    window.api.contextMenu()
  })
}
