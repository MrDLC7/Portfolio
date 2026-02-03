function initThemeAndScrollControls() {
    // ===== Перемикач теми =====
    const themeButton = document.createElement('button');
    const savedTheme = localStorage.getItem('theme');
    const navBar = document.querySelector('nav.header_name_change_theme');

    themeButton.className = 'themeToggle';
    themeButton.classList.add('dynamic-btn');
    
    const sunImage = `<svg class="dynamic-icon-btn" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960" fill="white">
            <path d="M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 
                41Zm0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 
                83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 
                720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 
                43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Zm318-275Z"/>
        </svg>`;

    const moonImage = `<svg class="dynamic-icon-btn" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960" fill="gray">
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 
                79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 
                255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.67 16.5Q688.67-384 660-384q-114.69 
                0-195.34-80.66Q384-545.31 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 
                87.5 212.5T480-180Zm-4-297Z"/>
        </svg>`;
        
    themeButton.innerHTML = savedTheme === 'dark' ? sunImage : moonImage;

    Object.assign(themeButton.style, {
        opacity: '0',
        position: 'fixed',
        top: 'var(--padding-top)',
        right: 'var(--padding-right)',
        padding: '10px',
        borderRadius: '50%',
        transform: 'none',
        border: 'none',
        background: 'none',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        zIndex: '1000',
        display: 'grid',
        placeItems: 'center'
    });

    document.body.appendChild(themeButton);

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeButton.title = 'Світла тема';
    } else {
        themeButton.title = 'Темна тема';
    }

    themeButton.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeButton.title = isDark ? 'Світла тема' : 'Темна тема';
        themeButton.innerHTML = isDark ?  sunImage : moonImage;
    });

    // ===== Кнопка "Вгору" =====
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'scrollToTop';
    let lastScrollY = window.scrollY;

    // SVG-іконка стрілки вгору
    backToTopButton.innerHTML = `<svg class="dynamic-icon-btn"  viewBox="0 0 24 24" 
        fill="gray" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L5 12M12 5L19 12M12 5V19" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;

    backToTopButton.title = 'Вгору';
    backToTopButton.classList.add('dynamic-btn');

    Object.assign(backToTopButton.style, {
        opacity: '0',
        position: 'fixed',
        bottom: 'var(--padding-bottom)',
        right: 'var(--padding-right)',
        padding: '5px',
        borderRadius: '10px',
        transform: 'none',
        border: 'none',
        background: 'var(--color-neutral-gray)',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        zIndex: '1000',
        visibility: 'hidden',
        display: 'grid',
        placeItems: 'center'
    });

    document.body.appendChild(backToTopButton);

    setTimeout(() => {

        themeButton.style.opacity = '0.7';
        backToTopButton.style.opacity = '0.5';
        themeButton.style.transition = 'opacity 2s ease-in-out';
        backToTopButton.style.transition = 'opacity 2s ease-in-out';
    }, 5000);

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        const isScrolledDownEnough = currentScrollY > 300;
        const isScrollingUp = currentScrollY < lastScrollY;

        backToTopButton.style.visibility =
            isScrolledDownEnough && isScrollingUp ? 'visible' : 'hidden';

        lastScrollY = currentScrollY;
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTopButton.addEventListener('mousemove', () => {
        backToTopButton.style.opacity = '0.8';
        backToTopButton.style.transition = 'opacity 0.2s ease-in-out';
    });
    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.opacity = '0.5';
        backToTopButton.style.transition = 'opacity 0.2s ease-in-out';
    });

    themeButton.addEventListener('mousemove', () => {
        themeButton.style.opacity = '1';
        themeButton.style.transition = 'opacity 0.2s ease-in-out';
        themeButton.classList.add('shake-in');
    });
    themeButton.addEventListener('mouseleave', () => {
        themeButton.style.opacity = '0.7';
        themeButton.style.transition = 'opacity 0.2s ease-in-out';
        themeButton.classList.remove('shake-in');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeAndScrollControls);
} else {
    initThemeAndScrollControls();
}
