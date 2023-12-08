function getWidth() {
  return Math.min(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export default class CollapsingMenu {
  constructor(shownId, hiddenId, moreId) {
    this.shownMenu = document.querySelector(`#${shownId}`);
    this.hiddenMenu = document.querySelector(`#${hiddenId}`);
    this.more = document.querySelector(`#${moreId}`);

    this.more.addEventListener('click', () => {
      this.hiddenMenu.classList.toggle('expanded');
      this.more.classList.toggle('expanded');
    });

    this.items = [...this.hiddenMenu.querySelectorAll('li')];
  }

  get shownItems() {
    const shownMenuItems = [];

    const screenWidth = getWidth();
    let width = this.more.offsetWidth;

    this.shownMenu.appendChild(this.more);
    for (let i = 0; i < this.items.length; i += 1) {
      width += this.items[i].offsetWidth;
      if (width <= screenWidth) {
        shownMenuItems.push(this.items[i]);
      }
    }
    shownMenuItems.push(this.more);

    return shownMenuItems;
  }

  get hiddenItems() {
    const hiddenMenuItems = [];

    const screenWidth = getWidth();
    let width = this.more.offsetWidth;

    for (let i = 0; i < this.items.length; i += 1) {
      width += this.items[i].offsetWidth;
      if (width > screenWidth) {
        hiddenMenuItems.push(this.items[i]);
      }
    }

    return hiddenMenuItems;
  }

  render() {
    this.more.style.flex = 'initial';

    for (let i = 0; i < this.shownItems.length; i += 1) {
      this.shownMenu.appendChild(this.shownItems[i]);
    }

    for (let i = 0; i < this.hiddenItems.length; i += 1) {
      this.hiddenMenu.appendChild(this.hiddenItems[i]);
    }

    this.more.style.flex = '1 1 auto';
  }
}
