function toggleUi(){
    
    return(`
        <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
    <span id="toggle" aria-checked="false" class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline" role="checkbox" tabindex="0">
        <!-- On: "translate-x-5", Off: "translate-x-0" -->
        <span id="toggleButton" aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
    </span>
    `)
}

export default function toggle (){
    toggleUi()                   
    const toggle = document.getElementById('toggle');
    const toggleButton = document.getElementById('toggleButton');

    toggle.addEventListener('click', function() {
        
        const isChecked = toggle.getAttribute('aria-checked') === 'true';

        if (isChecked) {
        toggle.setAttribute('aria-checked', 'false');
        toggle.classList.remove('bg-indigo-600');
        toggle.classList.add('bg-gray-200');
        toggleButton.classList.remove('translate-x-0');
        toggleButton.classList.add('translate-x-5');
        
        } else {
        toggle.setAttribute('aria-checked', 'true');
        toggle.classList.remove('bg-gray-200');
        toggle.classList.add('bg-indigo-600');
        toggleButton.classList.remove('translate-x-5');
        toggleButton.classList.add('translate-x-0')
        
        }
    });
}