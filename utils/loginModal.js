let modalHTML = null
let loginFormInitialized = false

async function loginModal(target_id) {
    const btn = document.getElementById(target_id)

    btn.addEventListener('click', async () => {
        try {
            if (!modalHTML) {
                const res = await fetch('/auth/login.html')
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
                }
                
                modalHTML = await res.text()
            }
            
            if (!document.getElementById('staticBackdrop')) {
                document.body.insertAdjacentHTML('beforeend', modalHTML)
                await new Promise(resolve => setTimeout(resolve, 0))
                
                if (!loginFormInitialized) {
                    try {
                        const { default: initLoginForm } = await import('/auth/api/login.js')
                        initLoginForm()
                        loginFormInitialized = true
                    } catch(error) {
                        console.error('Failed to import login.js:', importError)
                    }
                }
            }
            
            const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'))
            modal.show()
            
            btn.disabled = false
        } catch (error) {
            console.error('Failed to load modal:', error)
        }
    })
}

export default loginModal
