
async function test() {
    const data = await {
        then: function (resolve, reject) {
            resolve(2);
        }
    };

    console.log(data);
}

test();

const thenable = {
    then: (resolve, reject) => {
        console.log('Resolving Thenable'); //1
        reject('An error occurred');
    },
};

Promise.resolve(thenable)
    .then((value) => {
        console.log('Resolved Value:', value);
    })
    .catch((err) => {
        console.error('Caught Error:', err);//Caught Error: An error occurred
    });
