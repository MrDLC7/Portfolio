// const bg_color_classes = ["bg-rose-600", "bg-pink-600", "bg-fuchsia-600",
//   "bg-purple-600", "bg-violet-600", "bg-indigo-600", "bg-blue-600",
//   "bg-sky-600", "bg-cyan-600", "bg-teal-600", "bg-emerald-600",
//   "bg-green-600", "bg-lime-600", "bg-yellow-600", "bg-amber-600",
//   "bg-orange-600"];

// const text_color_classes = ["text-rose-600", "text-pink-600", "text-fuchsia-600",
//   "text-purple-600", "text-violet-600", "text-indigo-600", "text-blue-600",
//   "text-sky-600", "text-cyan-600", "text-teal-600", "text-emerald-600",
//   "text-green-600", "text-lime-600", "text-yellow-600", "text-amber-600",
//   "text-orange-600"];



const cards = document.querySelectorAll('.skill-card');

const arr_skills_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr_skills_3 = [1, 6, 5, 3, 4, 9, 2, 7, 8];
const arr_skills_4 = [1, 4, 5, 3, 9, 2, 6, 7, 8];

const grid2 = document.querySelector('.skills-grid-2');
const grid3 = document.querySelector('.skills-grid-3');
const grid4 = document.querySelector('.skills-grid-4');

function moveContainerBasedOnScreen() {
  const screenWidth = window.innerWidth;


  // Визначаємо поточного батька
  const currentParent =
    getComputedStyle(grid4).display !== 'none' ? 4
      : getComputedStyle(grid3).display !== 'none' ? 3 : 2;

  // Отримуємо всі контейнери
  const grid2_1 = document.querySelector('.skills-grid-2_1');
  const grid2_2 = document.querySelector('.skills-grid-2_2');
  const grid3_1 = document.querySelector('.skills-grid-3_1');
  const grid3_2 = document.querySelector('.skills-grid-3_2');
  const grid3_3 = document.querySelector('.skills-grid-3_3');
  const grid4_1 = document.querySelector('.skills-grid-4_1');
  const grid4_2 = document.querySelector('.skills-grid-4_2');
  const grid4_3 = document.querySelector('.skills-grid-4_3');
  const grid4_4 = document.querySelector('.skills-grid-4_4');


  // Перевіряємо ширину екрану
  if (screenWidth >= 1920 && currentParent === 4) {
    if (grid4.children.length > 0) return; // Якщо вже переміщено, виходимо

    [grid4_1, grid4_2, grid4_3, grid4_4].forEach(container => {
      if (container) container.innerHTML = '';
    });
    // Десктоп: переміщуємо в parent-desktop
    for (let id = 0; id < arr_skills_4.length; id++) {
      if (id < 2) {
        grid4_1.appendChild(cards.item(arr_skills_4[id] - 1));
      }
      else if (id < 5) {
        grid4_2.appendChild(cards.item(arr_skills_4[id] - 1));
      }
      else if (id < 7) {
        grid4_3.appendChild(cards.item(arr_skills_4[id] - 1));
      }
      else {
        grid4_4.appendChild(cards.item(arr_skills_4[id] - 1));
      }
    }
  } else if (screenWidth >= 1024 && currentParent === 3) {
    if (grid3.children.length > 0) return; // Якщо вже переміщено, виходимо

    [grid3_1, grid3_2, grid3_3].forEach(container => {
      if (container) container.innerHTML = '';
    });
    // Десктоп: переміщуємо в parent-desktop
    for (let id = 0; id < arr_skills_3.length; id++) {
      if (id < 2) {
        grid3_1.appendChild(cards.item(arr_skills_3[id] - 1));
      }
      else if (id < 6) {
        grid3_2.appendChild(cards.item(arr_skills_3[id] - 1));
      }
      else {
        grid3_3.appendChild(cards.item(arr_skills_3[id] - 1));
      }
    }
  } else if (screenWidth < 1024 && currentParent === 2) {
    if (grid2.children.length > 0) return; // Якщо вже переміщено, виходимо

    [grid2_1, grid2_2].forEach(container => {
      if (container) container.innerHTML = '';
    });
    // Мобільний: переміщуємо в parent-mobile
    for (let id = 0; id < arr_skills_2.length; id++) {
      if (id < 4) {
        grid2_1.appendChild(cards.item(arr_skills_2[id] - 1));
      }
      else {
        grid2_2.appendChild(cards.item(arr_skills_2[id] - 1));
      }
    }
  }
}

// Запускаємо при завантаженні та зміні розміру
window.addEventListener('load', moveContainerBasedOnScreen);
window.addEventListener('resize', moveContainerBasedOnScreen);