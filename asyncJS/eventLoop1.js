console.log('Start'); //1

setTimeout(() => {
    console.log('Inside setTimeout 1'); //3

    setTimeout(() => {
        console.log('Inside setTimeout 2'); //5

        setTimeout(() => {
            console.log('Inside setTimeout 3'); //6
        }, 0);
    }, 0);
}, 0);

setTimeout(() => {
    console.log('Inside setTimeout 4'); //4
}, 0);

setTimeout(() => {
    console.log('Inside setInterval 5'); //7
}, 50); //if time is 0 then this will be 5

console.log('End'); //2

//2-----------------------
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

setTimeout(() => {
  console.log('C');
  setTimeout(() => {
    console.log('D');
  }, 0);
}, 0);

console.log('E');
