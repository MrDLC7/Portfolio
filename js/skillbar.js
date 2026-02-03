function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const targetWidth = bar.dataset.width;

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 2500);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkillBars);
} else {
    initSkillBars();
}
