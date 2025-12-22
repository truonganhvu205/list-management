import {
    password_isValid,
    password_isMatch,
    err,
    clearErr,
    triggerStaticEffect,
    backFormReset,
} from '../utils/index.js'

const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')
const resetpasswordForm = document.getElementById('resetpassword_form')

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        password.focus()
    }, 150)
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

resetpasswordForm.addEventListener('submit', e => {
    e.preventDefault()

    if(!password.value.trim() || !passwordConfirm.value.trim()) {
        err(password)
        err(passwordConfirm)
        
        setTimeout(() => {
            password.focus()
        }, 150)
        
        return
    }
})
