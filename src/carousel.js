export default class Carousel {
  constructor(root) {
    root.classList.add('carousel');

    this.slides = [];
    this.currentSlideId = 0;

    this.buttons = document.createElement('div');
    this.buttons.classList.add('buttons');

    const previousBtn = document.createElement('button');
    previousBtn.type = 'button';
    previousBtn.classList.add('previous');
    previousBtn.textContent = 'Previous';
    previousBtn.addEventListener('click', () => {
      this.displaySlide(this.currentSlideId - 1);
      clearTimeout(this.currentTimeout);
      this.currentTimeout = 0;
      this.runAnimation();
    });

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.classList.add('next');
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', () => {
      this.displaySlide(this.currentSlideId + 1);
      clearTimeout(this.currentTimeout);
      this.currentTimeout = 0;
      this.runAnimation();
    });

    this.buttons.appendChild(previousBtn);
    this.buttons.appendChild(nextBtn);
    root.appendChild(this.buttons);
    
    this.container = document.createElement('div');
    this.container.classList.add('container');
    root.appendChild(this.container);

    this.circles = document.createElement('div');
    this.circles.classList.add('circles');
    root.appendChild(this.circles);

    this.currentTimeout = 0;
  }

  addSlide(imgPath) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    this.slides.push(slide);
    const id = this.slides.length - 1;
    slide.dataset.id = id;

    const image = new Image();
    image.src = imgPath;
    slide.appendChild(image);

    const circle = document.createElement('button');
    circle.classList.add('circle');
    circle.dataset.id = id;
    circle.addEventListener('click', () => {
      this.displaySlide(circle.dataset.id);
      clearTimeout(this.currentTimeout);
      this.currentTimeout = 0;
      this.runAnimation();
    });
    
    this.container.appendChild(slide);
    this.circles.appendChild(circle);
  }

  displaySlide(slideId) {
    const circleNodes = this.circles.querySelectorAll('.circle');

    this.currentSlideId = Number(slideId);
    if (slideId >= this.slides.length) {
      this.currentSlideId = 0;
    } else if (slideId < 0) {
      this.currentSlideId = this.slides.length - 1;
    }

    for (let i = 0; i < circleNodes.length; i += 1) {
      if (this.currentSlideId === i) {
        circleNodes[i].classList.add('active');
      } else {
        circleNodes[i].classList.remove('active');
      }
    }

    this.container.style.transform = `translateX(-${this.currentSlideId * 100}%)`;
  }

  runAnimation() {
    this.currentTimeout = setTimeout(() => {
      this.currentSlideId += 1;
      this.displaySlide(this.currentSlideId);
      this.runAnimation();
    }, 5000);
  }
}
