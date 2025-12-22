let loginModalHTML = null
let loginFormInitialized = false

async function loginModal(target_id) {
    const btn = document.getElementById(target_id)

    btn.addEventListener('click', async () => {
        try {
            btn.disabled = true
            
            if (!loginModalHTML) {
                // const basePath = document.querySelector('base')?.href || window.location.origin
                // const fetchUrl = new URL('/auth/login.html', basePath).href
                const fetchUrl = new URL('/auth/login.html', import.meta.url)
                const res = await fetch(fetchUrl)
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
                }
                
                loginModalHTML = await res.text()
            }
            
            if (!document.getElementById('login_staticBackdrop')) {
                document.body.insertAdjacentHTML('beforeend', loginModalHTML)
                await new Promise(resolve => setTimeout(resolve, 0))
                
                if (!loginFormInitialized) {
                    try {
                        // const { default: initLoginForm } = await import('/api/login.js')
                        const { default: initLoginForm } = await import('/auth/api/login.js')
                        initLoginForm()
                        loginFormInitialized = true
                    } catch(error) {
                        console.error('Failed to import login.js:', importError)
                    }
                }
            }
            
            const modalEl = document.getElementById('login_staticBackdrop')
            const modal = new bootstrap.Modal(modalEl)
            modal.show()

            modalEl.addEventListener('hidden.bs.modal', () => {
                btn.disabled = false
            }, { once: true })
        } catch (error) {
            console.error('Failed to load modal:', error)
        }
    })
}

export default loginModal
