function password_isValid(password) {
    if (password.length < 8) {
        return false
    }

    const isValid = /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/.test(password)
    return isValid
}

export default password_isValid
