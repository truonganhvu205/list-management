const jumpPageBtn = document.getElementById('jumpPage-btn')

var popover = new bootstrap.Popover(jumpPageBtn, {
    container: 'body',
    trigger: 'manual',
    placement: 'bottom',
    html: true,
    sanitize: false,
    content: `
        <form id="jumpForm" class="d-flex gap-2 align-items-center">
            <input type="number" min="3" max="99" value="3"
            class="form-control form-control-sm"/>

            <button type="submit" class="btn btn-sm btn-outline-primary">Go</button>
        </form>
    `,
})

jumpPageBtn.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()

    popover.toggle()
    jumpPageBtn.blur()

    setTimeout(() => {
        const pop = document.querySelector('.popover')
        if (!pop) return

        const input = pop.querySelector('input')
        if (input) {
            input.focus()
            input.select()
        }
    }, 0)
})

document.addEventListener('submit', e => {
    if (e.target.id === 'jumpForm') {
        e.preventDefault()
        e.stopPropagation()

        const page = e.target.querySelector('input').value
        window.location.href = `list.html?page=${page}`
        popover.hide()
    }
})

document.addEventListener('click', e => {
    const pop = document.querySelector('.popover')
    if (pop && !jumpPageBtn.contains(e.target) && !pop.contains(e.target)) {
        popover.hide()
    }
})

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        popover.hide()
    }
})
