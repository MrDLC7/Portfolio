function stabilizeHover(element, threshold = 1000) {
    let hoverTimer;

    element.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimer);
        element.classList.add('hover-active');
    });

    element.addEventListener('mouseleave', () => {
        hoverTimer = setTimeout(() => {
            element.classList.remove('hover-active');
        }, threshold);
    });
}

function initUnflickeringCursor() {
    document.querySelectorAll('.btn').forEach(stabilizeHover);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUnflickeringCursor);
} else {
    initUnflickeringCursor();
}
