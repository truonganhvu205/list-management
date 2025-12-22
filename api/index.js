import choices from "./choices.js"
import {
    loginModal,
} from "../utils/index.js"

document.addEventListener('DOMContentLoaded', () => {
    loginModal('login_btn')
    
    const choiceSelect = choices('#choice-select')
})
