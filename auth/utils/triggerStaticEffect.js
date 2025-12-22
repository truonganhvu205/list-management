const staticModal = document.getElementById('staticBackdrop')

function triggerStaticEffect() {
  staticModal.classList.add('modal-static')

  setTimeout(() => {
    staticModal.classList.remove('modal-static')
  }, 300)
}

export default triggerStaticEffect
