import './style.scss';

function app() {
	var element = document.createElement('div');
	element.innerHTML = 'Hello Word!';
	element.classList.add('header');
	return element;
}

document.body.appendChild(app());