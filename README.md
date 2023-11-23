# Dynamic Interactions

This is a small practice project where I implement basic dynamic user interactions using js.
This is a part of [The Odin Project curriculum](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions)

## Interactions I recreate:
- Drop-down menus
- Mobile menus
- Image sliders

## Technologies I use:
- Vanilla JS
- Pnpm
- Webpack
- Eslint
- Prettier
- Git

## Docs
Here I will try to explain what happens in my code and how it is used.

### Drop-down menus
There are two ways to get drop-downs to work:
1. Using HTML
2. Using JavaScript "constructor" class

#### Using HTML to create drop-downs
To make a drop-down, you need to create the following structure:

```html
<div class="drop-down closed">
  <div class="drop-down-title">{Drop down title}</div>
  <ul class="drop-down-options">
    <li class="drop-down-option">{Drop down option name}</li>
    <li class="drop-down-option">{Drop down option name}</li>
    <li class="drop-down-option">{Drop down option name}</li>
  </ul>
</div>
```

#### Using JS constructor to create drop-downs
You can just call use a class from *src/constructors/dropDownConstructor.js*

You create a new instance of a class, passing the title of the future drop-down and then an object, containing keys as option names and values as their callbacks.

It looks like this:
```javascript
import DropDown from './src/constructors/dropDownConstructor.js';

const colorDropDown = new DropDown('Color', {
  green: () => console.log('green'),
  red: () => alert('red'),
  blue: () => console.log('blue'),
});
```

To actually make it appear on the page, you need to get its html and append it to the page:

```javascript
// parent for our colorDropDown element
const root = document.querySelector('#root');

root.appendChild(colorDropDown.html);
```
