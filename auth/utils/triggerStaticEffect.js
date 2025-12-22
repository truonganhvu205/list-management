function triggerStaticEffect(target_id) {
  target_id.classList.add('modal-static')

  setTimeout(() => {
    target_id.classList.remove('modal-static')
  }, 300)
}

export default triggerStaticEffect
