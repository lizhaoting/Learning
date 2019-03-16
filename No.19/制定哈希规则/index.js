import styles from './style.css';

var element = document.createElement('div');
	element.innerHTML = 'Hello Word!';
	element.classList.add(styles.header);

document.getElementById('app').appendChild(element);