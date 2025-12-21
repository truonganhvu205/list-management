function choices(selector) {
    return new TomSelect(selector, {
        controlInput: null,
        create: false,
        hideSelected: true,
        onDropdownOpen: function(dropdown) {
            this.positionDropdown()
        }
    })
}

TomSelect.prototype.positionDropdown = function() {
    const dropdown = this.dropdown
    const control = this.control
    const wrapper = this.wrapper
    
    const rect = control.getBoundingClientRect()
    const dropdownHeight = dropdown.offsetHeight || 200
    const viewportHeight = window.innerHeight
    
    const spaceBelow = viewportHeight - rect.bottom - 10
    const spaceAbove = rect.top - 10
    
    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        dropdown.style.top = 'auto'
        dropdown.style.bottom = '100%'
        dropdown.style.marginBottom = '2px'
        dropdown.style.marginTop = '0'
        wrapper.setAttribute('data-placement', 'top')
    } else {
        dropdown.style.top = '100%'
        dropdown.style.bottom = 'auto'
        dropdown.style.marginTop = '2px'
        dropdown.style.marginBottom = '0'
        wrapper.setAttribute('data-placement', 'bottom')
    }
}

export default choices
