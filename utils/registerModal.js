let registerModalHTML = null
let registerFormInitialized = false

async function registerModal(target_id) {
    const btn = document.getElementById(target_id)

    btn.addEventListener('click', async () => {
        try {
            btn.disabled = true
            
            if (!registerModalHTML) {
                const fetchUrl = new URL('/auth/register.html', import.meta.url)
                const res = await fetch(fetchUrl)
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
                }
                
                registerModalHTML = await res.text()
            }
            
            if (!document.getElementById('register_staticBackdrop')) {
                document.body.insertAdjacentHTML('beforeend', registerModalHTML)
                await new Promise(resolve => setTimeout(resolve, 0))
                
                if (!registerFormInitialized) {
                    try {
                        const { default: initRegisterForm } = await import('/auth/api/register.js')
                        initRegisterForm()
                        registerFormInitialized = true
                    } catch(error) {
                        console.error('Failed to import register.js:', error)
                    }
                }
            }
            
            const modalEl = document.getElementById('register_staticBackdrop')
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

export default registerModal
