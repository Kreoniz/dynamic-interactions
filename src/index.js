import './reset.css';
import './style.css';

const dropDowns = document.querySelectorAll('.drop-down');

dropDowns.forEach((dropDown) => {
  dropDown.querySelector('.drop-down-title').addEventListener('click', () => {
    dropDown.classList.toggle('hidden');
  });
});
