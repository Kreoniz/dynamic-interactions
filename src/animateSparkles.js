import StarSVG from './img/star.svg';

export default function animateSparkles() {
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;

  const starColors = ['#15803d', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212'];

  for (let i = 0; i < 50; i += 1) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = StarSVG;
    const starIcon = sparkle.querySelector('svg');
    starIcon.classList.add('sparkle');

    const xPos = Math.round(Math.random() * screenWidth);
    const yPos = Math.round(Math.random() * screenHeight);
    const randomColor = starColors[Math.round(Math.random() * starColors.length)];

    starIcon.style.width = '30px';
    starIcon.aspectRatio = 1;
    starIcon.style.top = 0;
    starIcon.style.left = `${xPos}px`;
    starIcon.style.position = 'absolute';
    starIcon.style.zIndex = 100;
    starIcon.style.fill = randomColor;

    starIcon.animate(
      {
        opacity: [1, 0],
        transform: ['translateY(-100%)', `translateY(${yPos}px)`],
      },
      {
        fill: 'both',
        duration: screenHeight * 3,
      },
    );
    setTimeout(() => starIcon.remove(), screenHeight * 3)

    document.querySelector('.content').appendChild(starIcon);
  }
}

