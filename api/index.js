import choices from "./choices.js"
import {
    loginModal,
    registerModal,
} from "../utils/index.js"

document.addEventListener('DOMContentLoaded', () => {
    loginModal('login_btn')
    registerModal('register_btn')
    
    choices('#choice-select')
})
