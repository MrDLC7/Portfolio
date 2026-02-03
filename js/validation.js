function showNotification(text, type = 'success') {
    const notif = document.createElement('div');
    notif.textContent = text;

    Object.assign(notif.style, {
        zIndex: '999',
        position: 'fixed',
        top: '100px',
        right: '50px',
        padding: '10px 15px',
        borderRadius: '5px',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        color: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        opacity: '0',
        transition: 'opacity 0.3s ease',
        background: type === 'error' ? '#d9534f' : '#28a745'
    });

    document.body.appendChild(notif);

    requestAnimationFrame(() => {
        notif.style.opacity = '1';
    });

    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function validateForm() {
    const form = document.getElementById('contact-form');
    if (!form) return false;

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    if (name.length < 2) {
        showNotification("Імʼя має містити мінімум 2 символи.", 'error');
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification('Некоректна email адреса.', 'error');
        return false;
    }

    if (message.length < 10) {
        showNotification('Повідомлення має містити мінімум 10 символів.', 'error');
        return false;
    }

    showNotification('Повідомлення успішно надіслано!', 'success');
    form.reset();
    return true;
}

// Функція для виклику з HTML (onclick / onsubmit)
function sendForm() {
    validateForm();
}

// Робимо доступною глобально (бо script type="module")
window.sendForm = sendForm;
