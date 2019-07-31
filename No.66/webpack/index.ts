import './style.css';

var element = document.createElement('div');

function greeter(person: string) {
    return "Hello, " + person;
}

element.innerHTML = greeter('Eric');

const className = 'header';

element.classList.add(className);

document.getElementById('app').appendChild(element);