function backFormReset(target_id) {
    window.addEventListener('pageshow', (event) => {
        if (event.persisted || performance.navigation.type === 2) {
            target_id.reset()
        }
    })
}

export default backFormReset
