function initTextAnimation() {
    // 1. Анімація тексту по літерах
    const textAnimEls = document.getElementsByClassName('text-anim');

    for (const textEl of textAnimEls) {
        textEl.innerHTML = textEl.textContent
            .replace(/\S/g, "<span class='text-letter-anim'>$&</span>");
    }

    // 2. Функція плавної появи
    function fadeIn(selector, y, stagger) {
        if (typeof gsap === 'undefined') return;

        gsap.from(selector, {
            y,
            opacity: 0,
            stagger,
            filter: 'blur(4px)',
            ease: 'circ.out',
            duration: 1
        });
    }

    // 3. Запуск анімацій
    fadeIn('.text-letter-anim', 100, 0.16);
    fadeIn('.item-anim', 40, 0.5);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTextAnimation);
} else {
    initTextAnimation();
}

