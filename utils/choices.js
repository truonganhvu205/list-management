function choices(target_id) {
    const choiceSelect = document.getElementById(target_id)
    // const options = choiceSelect.querySelectorAll('option')

    // choiceSelect.addEventListener('change', e => {
    //     options.forEach(option => {
    //         if(!option.selected) {
    //             option.classList.remove('d-none')
    //         } else {
    //             option.classList.add('d-none')
    //         }
    //     })
    // })

    return new TomSelect('#choice-select', {
        controlInput: null,
        maxOptions: null,
        create: false,
        hideSelected: true,
    })
}

export default choices
