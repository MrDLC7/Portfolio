function initSlider() {
    let startX = 0;
    let isDragging = false;
    let currentSlide = 0;

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');

    if (!slider || slides.length === 0) return;

    // ===== КРАПКИ =====
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    function updateSlider() {
        slider.style.transition = 'transform 0.3s ease';
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(n) {
        currentSlide = n;
        updateSlider();
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
        else {
            goToSlide(0);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
        else {
            goToSlide(slides.length - 1);
        }
    }

    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);

    // ===== MOUSE SWIPE =====
    slider.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.clientX;
        slider.style.transition = 'none';
    });

    slider.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const moveX = e.clientX - startX;
        const offset = -currentSlide * 100 + (moveX / slider.clientWidth) * 100;
        slider.style.transform = `translateX(${offset}%)`;
    });

    slider.addEventListener('mouseup', e => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.clientX - startX;

        if (diff > 60) prevSlide();
        else if (diff < -60) nextSlide();
        else updateSlider();
    });

    slider.addEventListener('mouseleave', () => {
        if (isDragging) updateSlider();
        isDragging = false;
    });

    // ===== TOUCH SWIPE =====
    slider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        slider.style.transition = 'none';
    });

    slider.addEventListener('touchmove', e => {
        const moveX = e.touches[0].clientX - startX;
        const offset = -currentSlide * 100 + (moveX / slider.clientWidth) * 100;
        slider.style.transform = `translateX(${offset}%)`;
    });

    slider.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientX - startX;

        if (diff > 60) prevSlide();
        else if (diff < -60) nextSlide();
        else updateSlider();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
} else {
    initSlider();
}


function showSliderMode() {
    const projects = document.querySelector('.projects-wrapper'); // Основний контейнер
    const sliderText = document.getElementById('slider_text_btn'); // Кнопка режиму
    const slider_on = document.querySelector('slider_on');
    const slider_off = document.querySelector('slider_off');

    // Перемикаємо режим "слайдер / стандартний"
    projects.classList.toggle('mode-slider');

    // Примусовий перерахунок розмітки
    window.dispatchEvent(new Event('resize'));

    // Змінюємо текст кнопки
    if (projects.classList.contains('mode-slider')) {
        sliderText.textContent = 'Режим "Стандартний"';
    }
    else {
        sliderText.textContent = 'Режим "Слайдер"';
    }
}


// Робимо доступною глобально (бо script type="module")
window.showSliderMode = showSliderMode;