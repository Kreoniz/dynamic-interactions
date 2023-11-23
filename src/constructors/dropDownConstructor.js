export default class DropDown {
  constructor(title, options) {
    this.title = title;
    this.titles = Object.keys(options);
    this.callbacks = Object.values(options);
  }

  get html() {
    const dropDown = document.createElement('div');

    dropDown.classList.add('drop-down', 'closed');

    const title = document.createElement('div');
    title.textContent = this.title;
    title.classList.add('drop-down-title');

    const optionBlock = document.createElement('ul');
    optionBlock.classList.add('drop-down-options');

    for (let i = 0; i < this.titles.length; i += 1) {
      const element = document.createElement('li');
      element.classList.add('drop-down-option');
      element.textContent = this.titles[i];
      element.addEventListener('click', this.callbacks[i]);

      optionBlock.appendChild(element);
    }

    dropDown.appendChild(title);
    dropDown.appendChild(optionBlock);

    return dropDown;
  }
}
