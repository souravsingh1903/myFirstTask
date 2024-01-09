const form = document.querySelector('form');
const fruitsList = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  
  newLi.innerHTML = `${fruitToAdd.value} <button class="delete-btn">x</button> <button class="edit-btn">Edit</button>`;
  fruitsList.appendChild(newLi);
});

fruitsList.addEventListener('click', function(event) {
  if(event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruitsList.removeChild(fruitToDelete);
  }
});
