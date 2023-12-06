import './css/style.css';
import DropDown from './constructors/dropDownConstructor';
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

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

class CollapsingMenu {
  constructor(shownId, hiddenId) {
    this.shownMenu = document.querySelector(`#${shownId}`);
    this.hiddenMenu = document.querySelector(`#${hiddenId}`);
    this.items = [...this.hiddenMenu.childNodes];
  }

  get shownItems() {
    const shownMenuItems = [];

    // const screenWidth = window.screen.availWidth;
    const screenWidth = getWidth();
    let width = 0;

    for (let i = 0; i < this.items.length; i += 1) {
      width += this.items[i].offsetWidth;
      if (width <= screenWidth) {
        shownMenuItems.push(this.items[i]);
      }
    }

    return shownMenuItems;
  }

  get hiddenItems() {
    const hiddenMenuItems = [];

    // const screenWidth = window.screen.availWidth;
    const screenWidth = getWidth();
    let width = 0;

    for (let i = 0; i < this.items.length; i += 1) {
      width += this.items[i].offsetWidth;
      if (width > screenWidth) {
        hiddenMenuItems.push(this.items[i]);
      }
    }

    return hiddenMenuItems;
  }

  render() {
    this.shownMenu.textContent = '';
    this.hiddenMenu.textContent = '';
    console.log(this.items);
    console.log('Shown:', this.shownItems.map((e) => e.textContent), this.shownMenu.childNodes);
    console.log('Hidden:', this.hiddenItems.map((e) => e.textContent), this.hiddenMenu.childNodes);

    for (let i = 0; i < this.shownItems.length; i += 1) {
      this.shownMenu.appendChild(this.shownItems[i]);
    }
    for (let i = 0; i < this.hiddenItems.length; i += 1) {
      this.hiddenMenu.appendChild(this.hiddenItems[i]);
    }
  }
}

const menu = new CollapsingMenu('shown-menu', 'hidden-menu');
menu.render();

window.addEventListener('resize', () => menu.render());
