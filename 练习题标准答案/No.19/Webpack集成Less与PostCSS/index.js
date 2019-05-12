import styles from './style.css';

var element = document.createElement('div');
	element.innerHTML = 'Hello Word!';
	const className = styles.footer;
	console.log(className);
	className.split(' ').map(s => {
		element.classList.add(s);
	})

document.getElementById('app').appendChild(element);