import {
    username_isValid,
    email_isValid,
    password_isValid,
    password_isMatch,
    err,
    clearErr,
    triggerStaticEffect,
    backFormReset,
} from '../utils/index.js'

function initRegisterForm() {
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passwordConfirm = document.getElementById('password_confirm')
    const registerForm = document.getElementById('register_form')
    const staticModal = document.getElementById('register_staticBackdrop')

    username.addEventListener('input', e => {
        if (username.value.trim() && !username_isValid(username.value.trim())) {
            err(username)
        } else {
            clearErr(username)
        }
    })

    email.addEventListener('input', () => {
        if (email.value.trim() && !email_isValid(email.value.trim())) {
            err(email)
        } else {
            clearErr(email)
        }
    })

    password.addEventListener('input', e => {
        if(password.value.trim() && !password_isValid(password.value.trim())) {
            err(password)
        } else {
            clearErr(password)
        }
    })

    passwordConfirm.addEventListener('input', e => {
        if(!passwordConfirm.value.trim()) {
            clearErr(passwordConfirm)
        }

        if(!password_isMatch(password.value.trim(), passwordConfirm.value.trim())) {
            err(passwordConfirm)
        } else {
            clearErr(passwordConfirm)
        }
    })

    registerForm.addEventListener('submit', e => {
        e.preventDefault()

        if(!username.value.trim() || !email.value.trim() || 
        !password.value.trim() || !passwordConfirm.value.trim()) {
            err(username)
            err(email)
            err(password)
            err(passwordConfirm)
            triggerStaticEffect(staticModal)
            
            setTimeout(() => {
                username?.focus()
                username?.select()
            }, 150)
            
            return
        }

        const modal = bootstrap.Modal.getInstance(staticModal)
        modal.hide()
        window.location.href = '/auth/login.html'
    })

    staticModal.addEventListener('shown.bs.modal', () => {
        setTimeout(() => {
            username?.focus()
        }, 150)
    })

    staticModal.addEventListener('hidePrevented.bs.modal', () => {
        setTimeout(() => {
            username?.focus()
            username?.select()
        }, 150)
    })

    backFormReset(registerForm)
}

initRegisterForm()

export default initRegisterForm
