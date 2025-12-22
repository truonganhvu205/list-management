import {
    err,
    clearErr,
} from '../utils/index.js'

const username = document.getElementById('username')
const password = document.getElementById('password')
const loginForm = document.getElementById('login_form')

username.addEventListener('input', e => {
    if(!username.value.trim()) {
        clearErr(username)
    }

    clearErr(username)
})

password.addEventListener('input', e => {
    if(!password.value.trim()) {
        clearErr(password)
    }

    clearErr(password)
})

loginForm.addEventListener('submit', e => {
    e.preventDefault()

    if(!username.value.trim() || !password.value.trim()) {
        err(username)
        err(password)
    }

    form.submit()
})
