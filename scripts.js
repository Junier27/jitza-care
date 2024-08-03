// Función para abrir pestañas
function openTab(tabId) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

// Inicializar pestaña activa por defecto
document.addEventListener('DOMContentLoaded', () => {
    openTab('historia');
});

// Función para el desplazamiento suave
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Validación de formulario (simplificada)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
    }
});
