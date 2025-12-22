let modalHTML = null
let loginFormInitialized = false

async function loginModal(target_id) {
    const btn = document.getElementById(target_id)

    btn.addEventListener('click', async () => {
        try {
            if (!modalHTML) {
                const basePath = document.querySelector('base')?.href || window.location.origin
                const fetchUrl = new URL('/auth/login.html', basePath).href
                
                console.log('Fetching from:', fetchUrl)
                
                const res = await fetch(fetchUrl)
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
                        const { default: initLoginForm } = await import('/api/login.js')
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
