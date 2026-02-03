function initSidebarControl() {
    const sidebar = document.querySelector('.sidebar');
    const showMenu = document.getElementById('show-sidebar-menu');
    const closeButton = sidebar?.querySelector('li:first-child a');

    if (!sidebar) return;

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const toggleSidebar = (visible) => {
        sidebar.classList.toggle('active', visible);
        overlay.classList.toggle('active', visible);
    };

    showMenu?.addEventListener('click', () => toggleSidebar(true));

    closeButton?.addEventListener('click', e => {
        e.preventDefault();
        toggleSidebar(false);
    });

    overlay.addEventListener('click', () => toggleSidebar(false));

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
            toggleSidebar(false);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebarControl);
} else {
    initSidebarControl();
}
