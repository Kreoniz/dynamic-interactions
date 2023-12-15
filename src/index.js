import './css/style.css';
import DropDown from './constructors/dropDownConstructor';
import CollapsingMenu from './collapsingMenu';
import Carousel from './carousel';
import animateSparkles from './animateSparkles';

import EarthImg from './img/carousel/earth.jpg';
import RocketLaunchImg from './img/carousel/rocket_launch.jpg';
import ForestImg from './img/carousel/forest_stars.jpg';
import MilkyWayImg from './img/carousel/milky_way.jpg';
import EarthNightImg from './img/carousel/earth_night.jpg';

const linksDropDown = new DropDown('LINKS', {
  'The Odin Project': () => window.open('https://www.theodinproject.com'),
  "Kreoniz's github": () => window.open('https://github.com/Kreoniz'),
  'Sparkles!': animateSparkles,
});

linksDropDown.html.classList.add('showcase-drop-down');

document.querySelector('#showcase-drop-down').appendChild(linksDropDown.html);

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

const carouselDiv = document.querySelector('#carousel');
const carousel = new Carousel(carouselDiv);
carousel.addSlide(EarthImg);
carousel.addSlide(RocketLaunchImg);
carousel.addSlide(ForestImg);
carousel.addSlide(MilkyWayImg);
carousel.addSlide(EarthNightImg);
carousel.displaySlide(0);
carousel.runAnimation();
