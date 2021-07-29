const defaultBtn = document.querySelector('#default');
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const body = document.body;

const theme = localStorage.getItem('theme');
body.classList.add('dark');
if (theme) {
  body.classList.remove('default', 'dark', 'light');
  body.classList.add(theme);
}

defaultBtn.addEventListener('click', () => {
  body.classList.add('default');
  body.classList.remove('dark', 'light');
  localStorage.setItem('theme', 'default');
});

darkBtn.addEventListener('click', () => {
  body.classList.add('dark');
  body.classList.remove('default', 'light');
  localStorage.setItem('theme', 'dark');
});

lightBtn.addEventListener('click', () => {
  body.classList.add('light');
  body.classList.remove('default', 'dark');
  localStorage.setItem('theme', 'light');
});
