import {
    err,
    clearErr,
    triggerStaticEffect,
    backFormReset,
} from '../utils/index.js'

function initLoginForm() {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const loginForm = document.getElementById('login_form')
    const staticModal = document.getElementById('staticBackdrop')

    username.addEventListener('input', () => {
        clearErr(username)
    })

    password.addEventListener('input', () => {
        clearErr(password)
    })

    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        e.stopPropagation()

        if(!username.value.trim() || !password.value.trim()) {
            err(username)
            err(password)
            triggerStaticEffect()
            
            setTimeout(() => {
                username.focus()
            }, 150)
            
            return
        }

        const modal = bootstrap.Modal.getInstance(staticModal)
        modal.hide()
        window.location.href = '/index.html'
    })

    staticModal.addEventListener('shown.bs.modal', () => {
        setTimeout(() => {
            username.focus()
        }, 150)
    })

    backFormReset(loginForm)
}

initLoginForm()

export default initLoginForm
