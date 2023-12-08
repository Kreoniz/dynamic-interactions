import './css/style.css';
import DropDown from './constructors/dropDownConstructor';
import CollapsingMenu from './collapsingMenu';
import animateSparkles from './animateSparkles';

const linksDropDown = new DropDown('LINKS', {
  'The Odin Project': () => window.open('https://www.theodinproject.com'),
  "Kreoniz's github": () => window.open('https://github.com/Kreoniz'),
  'Sparkles!': animateSparkles,
});

document.querySelector('.drop-downs').appendChild(linksDropDown.html);

const dropDowns = document.querySelectorAll('.drop-down');

dropDowns.forEach((dropDown) => {
  dropDown.querySelector('.drop-down-title').addEventListener('click', () => {
    dropDowns.forEach((elem) => {
      if (elem !== dropDown) {
        elem.classList.add('closed')
      }
    });

    dropDown.classList.toggle('closed');
  });
});

const menu = new CollapsingMenu('shown-menu', 'hidden-menu', 'more-btn');
menu.render();

window.addEventListener('resize', () => menu.render());
