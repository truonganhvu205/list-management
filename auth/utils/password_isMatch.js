function password_isMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        return false
    } else {
        return true
    }
}

export default password_isMatch
