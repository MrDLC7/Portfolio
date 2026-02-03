document.addEventListener('DOMContentLoaded', () => {
    // Цей код виконається після повного завантаження та розбору DOM-дерева сторінки.

    // === Отримання посилань на елементи модального вікна ===

    // Отримуємо посилання на основний контейнер модального вікна за його ID.
    const modal = document.getElementById('newsModal');
    // Отримуємо посилання на кнопку закриття модального вікна за її ID.
    const closeBtn = document.getElementById('closeModal');

    // Отримуємо посилання на елементи всередині модального вікна,
    // які будуть відображати дані новини.
    const modalTitle = document.getElementById('modalTitle');    // Заголовок новини
    const modalText = document.getElementById('modalText');     // Текст новини
    const modalAuthor = document.getElementById('modalAuthor');   // Автор новини
    const modalTime = document.getElementById('modalTime');     // Час публікації новини

    // === Обробка кнопок відкриття модального вікна ===

    // Знаходимо всі елементи на сторінці, які мають клас 'open-news'.
    // Це можуть бути кнопки або посилання, які відповідають за відкриття модального вікна.
    document.querySelectorAll('.open-news').forEach(button => {
        // Для кожної знайденої кнопки додаємо обробник події кліку.
        button.addEventListener('click', () => {
            // При кліку на кнопку, заповнюємо вміст модального вікна даними
            // з атрибутів `data-*` цієї кнопки.
            // Наприклад, `button.dataset.title` отримує значення атрибута `data-title`.
            modalTitle.textContent = button.dataset.title;   // Встановлюємо заголовок
            modalText.textContent = button.dataset.text;     // Встановлюємо текст
            modalAuthor.textContent = button.dataset.author; // Встановлюємо автора
            modalTime.textContent = button.dataset.time;     // Встановлюємо час

            // Видаляємо клас 'hidden' з основного контейнера модального вікна,
            // щоб зробити його видимим. Припускається, що 'hidden' приховує елемент.
            modal.classList.remove('hidden');
        });
    });

    // === Обробка закриття модального вікна ===

    // Додаємо обробник події кліку до кнопки закриття модального вікна.
    closeBtn.addEventListener('click', () => {
        // При кліку на кнопку закриття, додаємо клас 'hidden' до модального вікна,
        // щоб приховати його.
        modal.classList.add('hidden');
    });

    // Додаємо обробник події кліку до фонової області модального вікна (оверлею).
    // Це дозволяє закривати модальне вікно при кліку поза його основним вмістом.
    modal.querySelector('.modal-overlay').addEventListener('click', () => {
        // При кліку на оверлей, додаємо клас 'hidden' до модального вікна,
        // щоб приховати його.
        modal.classList.add('hidden');
    });

});