import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const h2 = document.createElement('h2');
  h2.classList.add('color');
  h2.innerHTML = 'in the index.js file';

  document.body.appendChild(h2);
});