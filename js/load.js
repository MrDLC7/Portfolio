// // Використання DOMContentLoaded — для раннього спрацювання, коли DOM готовий
// window.addEventListener('DOMContentLoaded', () => {
//   document.body.classList.add('ready');
// });

// // Якщо скрипт виконується пізніше, додається .ready відразу
// if (document.readyState === 'interactive' || document.readyState === 'complete') {
//   document.body.classList.add('ready');
// }

// load.js
function onDomReady() {
  document.body.classList.add('ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onDomReady);
} else {
  onDomReady();
}
