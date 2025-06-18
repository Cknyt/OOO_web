// Esperamos a que todo el contenido de la página (HTML) se haya cargado
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNCIONALIDAD PARA EL MENÚ DESPLEGABLE DEL USUARIO ---
    const userMenuButton = document.getElementById('user-menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (userMenuButton) {
        userMenuButton.addEventListener('click', function(event) {
            // Detenemos la propagación para que el clic no cierre el menú inmediatamente
            event.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (dropdownMenu && !userMenuButton.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });


    // --- NUEVA FUNCIONALIDAD PARA LAS PESTAÑAS (TABS) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if(tabButtons.length > 0 && tabPanels.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Obtenemos el ID del panel de la pestaña desde el atributo 'data-tab'
                const targetPanelId = button.getAttribute('data-tab');
                const targetPanel = document.getElementById(targetPanelId);

                // Quitamos la clase 'active' de todos los botones y paneles
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));

                // Añadimos la clase 'active' solo al botón pulsado y a su panel correspondiente
                button.classList.add('active');
                targetPanel.classList.add('active');
            });
        });
    }
});