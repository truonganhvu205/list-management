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

    username.addEventListener('input', () => {
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

    password.addEventListener('input', () => {
        if(password.value.trim() && !password_isValid(password.value.trim())) {
            err(password)
        } else {
            clearErr(password)
        }

        if (passwordConfirm.value.trim()) {
            if (!password_isMatch(password.value.trim(), passwordConfirm.value.trim())) {
                err(passwordConfirm)
            } else {
                clearErr(passwordConfirm)
            }
        }
    })

    passwordConfirm.addEventListener('input', () => {
        if(!passwordConfirm.value.trim()) {
            clearErr(passwordConfirm)
            return
        }

        if(!password_isMatch(password.value.trim(), passwordConfirm.value.trim())) {
            err(passwordConfirm)
        } else {
            clearErr(passwordConfirm)
        }
    })

    registerForm.addEventListener('submit', e => {
        e.preventDefault()
        e.stopPropagation()

        if(!username.value.trim() || !email.value.trim() || 
        !password.value.trim() || !passwordConfirm.value.trim()) {
            err(username)
            err(email)
            err(password)
            err(passwordConfirm)
            triggerStaticEffect(staticModal)
            
            requestAnimationFrame(() => {
                username?.focus()
                username?.select()
            })
            
            return
        }

        const modal = bootstrap.Modal.getInstance(staticModal)
        if(modal) modal.hide()
            
        window.location.href = '/auth/login.html'
    })

    staticModal.addEventListener('shown.bs.modal', () => {
        requestAnimationFrame(() => {
            username?.focus()
        })
    })

    staticModal.addEventListener('hidePrevented.bs.modal', () => {
        requestAnimationFrame(() => {
            username?.focus()
            username?.select()
        })
    })

    backFormReset(registerForm)
}

initRegisterForm()

export default initRegisterForm
