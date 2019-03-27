this.addEventListener('message', event => {
    console.log('received index.html data', event.data);
}, false);

const webWorker = new Worker('./index.js');

webWorker.postMessage('Word');

