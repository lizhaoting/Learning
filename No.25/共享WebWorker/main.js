let pool = [];
this.onconnect = event => {
    console.log(event);

    pool.push(event.ports[0]);

    event.ports[0].onmessage = e => {
        console.log('get message', e.data);
    }
}

