import hoverintent from 'hoverintent';

export function initCustom() {
    
    document.querySelectorAll('.main-navigation [data-dropdown-toggle]').forEach(($triggerEl) => {
        const dropdownId = $triggerEl.getAttribute('data-dropdown-toggle');
        const $dropdownEl = document.getElementById(dropdownId);
    
        if ($dropdownEl) {
            
            const dropdown = new Dropdown($dropdownEl, $triggerEl,{
                triggerType: 'none',
            },
        {override: true,id: 'dropdownMenu'});
            hoverintent(
                $triggerEl,
                () => {
                    // Show dropdown directly
                    $dropdownEl.classList.remove('hidden');
                    $dropdownEl.classList.add('block');
                },
                () => {
                    const isHoveringDropdown = $dropdownEl.matches(':hover'); // Check if hovering dropdown
                    
                    if (!isHoveringDropdown) {
                        $dropdownEl.classList.remove('block');
                        $dropdownEl.classList.add('hidden');
                    }
                }
            ).options({
                sensitivity: 7,
                interval: 100,
                timeout: 300,
            });
            hoverintent(
                $dropdownEl,
                () => {
                    
                },
                () => {
                    const isHoveringDropdown = $triggerEl.matches(':hover'); // Check if hovering dropdown
                    
                    if (!isHoveringDropdown) {
                        $dropdownEl.classList.remove('block');
                        $dropdownEl.classList.add('hidden');
                    }
                }
            ).options({
                sensitivity: 7,
                interval: 100,
                timeout: 300,
            });
           
    
        } else {
            console.error(`Dropdown element with ID "${dropdownId}" not found.`);
        }
    });
}

if (typeof window !== 'undefined') {
    window.initCustom = initCustom;
}
