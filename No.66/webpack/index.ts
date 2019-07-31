import './style.css';

var element = document.createElement('div');

element.innerHTML = 'Hello Word!';

const className = 'header';

element.classList.add(className);

document.getElementById('app').appendChild(element);