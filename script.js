const form = document.querySelector('.js-form');
const list = document.querySelector('.js-list');
const input = document.querySelector('.js-input');

form.addEventListener('submit', function(a) {
  a.preventDefault();
  const liTxt = input.value.trim();
  if (liTxt !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${liTxt} <button onclick="this.parentElement.remove()">delet</button>`;
    list.appendChild(li);
    input.value = '';
  }
});
