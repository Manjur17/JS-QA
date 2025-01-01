//if any then() fails , the corresponding next then() will be skipped and we directly enter catch()
Promise.resolve(1)
    .then(id => {
        console.log(`Success: ${id}`);
        return Promise.resolve(2);
    }).then(id => {
        console.log(`Success: ${id}`);
        return Promise.reject(3);
    }).then(id => {
        console.log(`Success: ${id}. Done!`);
        return Promise.resolve(2);
    }).then(id => {
        console.log(`Success: ${id}. Done!`);
        return Promise.resolve(2);
    })
    .then(id => {
        console.log(`Success: ${id}. Done!`);
        return Promise.resolve(2);
    })
    .then(id => {
        console.log(`Success: ${id}. Done!`);
        return Promise.resolve(2);
    })
    .catch(id => {
        console.log(`Error: ${id}`);
    });

//If you add more then calls after the catch, they will run!
Promise.resolve(1)
    .then(id => {
        console.log(`Success: ${id}`);
        return Promise.reject(2);
    }).then(id => {
        console.log(`Success: ${id}`);
        return Promise.resolve(3);
    }).then(id => {
        console.log(`Success: ${id}. Done!`);
    }).catch(id => {
        console.log(`Error: ${id}`);
    }).then(() => {
        console.log('Another then!');
    });
