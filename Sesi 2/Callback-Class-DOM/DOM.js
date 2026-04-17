// selector
const main = document.getElementById('main');
const addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
  // element
  const input = document.getElementById('input-text');
  const text = document.createElement('h1');
  text.innerText = input.value;
  input.value = '';
  text.style.color = 'red';
  main.appendChild(text);
});