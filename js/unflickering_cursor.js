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


// function screenParams() {
//     const containerMedia = document.createElement('div');
//     const labelWidth = document.createElement('h5');
//     const labelHeight = document.createElement('h5');

//     const windowWidth = window.innerWidth;   
//     const windowHeight = window.innerHeight;
//     const screenWidth = screen.width;
//     const screenHeight = screen.height;

//     labelWidth.textContent = `Ширина: ${screenWidth}px === Ширина вікна: ${windowWidth}px`;
//     labelHeight.textContent = `Висота: ${screenHeight}px === Висота вікна: ${windowHeight}px`;

//     containerMedia.appendChild(labelWidth);
//     containerMedia.appendChild(labelHeight);
//     Object.assign(containerMedia.style, {
//         position: 'fixed',
//         top: 'var(--padding-bottom)',
//         left: 'var(--padding-left)',
//         padding: '10px',
//         borderRadius: '10px',
//         background: 'var(--color-neutral-gray)',
//         color: 'var(--color-text-primary)',
//         fontSize: '14px',
//         zIndex: '1000',
//         display: 'flex',
//         flexDirection: 'column',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         gap: '5px'
//     });

//     document.body.appendChild(containerMedia);
// }

// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', screenParams);
// } else {
//     screenParams();
// }


// window.addEventListener('resize', screenParams);