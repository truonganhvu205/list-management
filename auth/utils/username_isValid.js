function username_isValid(username) {
    if (username.length < 3 || username.length > 16) {
        return false
    }

    const validChars = /^[a-zA-Z0-9_]+$/
    if (!validChars.test(username)) {
        return false
    }

    if (username.startsWith('_') || username.endsWith('_')) {
        return false
    }

    if (username.includes('__')) {
        return false
    }

    return true
}

export default username_isValid
