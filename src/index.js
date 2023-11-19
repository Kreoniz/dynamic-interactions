import './reset.css';
import './style.css';

const dropDowns = document.querySelectorAll('.drop-down');
console.log(dropDowns);

dropDowns.forEach(dropDown => {
  dropDown.querySelector('.drop-down-title').addEventListener('click', (e) => {
    dropDown.classList.toggle('hidden');
  });
});
