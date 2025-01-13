console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise 1');
  Promise.resolve().then(() => {
    console.log('Promise 2');
    return Promise.resolve('Promise 3');
  }).then((value) => {
    console.log(value);
  });
}).then(() => {
  console.log('Promise 4');
});

console.log('End');

//2.
console.log('Init'); //1

Promise.resolve().then(() => {//p1
  console.log('Step 1'); //3
  return Promise.resolve('Step 2').then((value) => {//p3
    console.log(value); //4 -> Step 2
    return Promise.resolve('Step 3'); //p4
  });
}).then((value) => {//p2
  console.log(value); //5 -> step 3
  return Promise.resolve('Step 4').then((value) => { //p5
    console.log(value); //6 -> Step 4
  });
});

console.log('Final'); //2

//3.
console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise A');
  return Promise.resolve().then(() => {
    console.log('Promise B');
    return Promise.resolve().then(() => {
      console.log('Promise C');
    });
  });
}).then(() => {
  console.log('Promise D');
});

console.log('End');

//4.
console.log('A'); //1

Promise.resolve().then(() => {
  console.log('B'); //3

  return Promise.resolve().then(() => {
    console.log('C'); //4
    return Promise.resolve().then(() => {
      console.log('D'); //5
    });
  }).then(() => {
    console.log('E'); //6
  });
}).then(() => {
  console.log('F'); //7
});

console.log('G');//2

//5.
console.log('Alpha'); //1

Promise.resolve().then(() => {
  console.log('Beta');//3
  return Promise.resolve().then(() => {
    console.log('Gamma'); //4
    return Promise.resolve().then(() => {
      console.log('Delta'); //5
      return Promise.resolve('Epsilon');
    });
  });
}).then((value) => {
  console.log(value); //6 -> Epsilon
});

console.log('Omega');//2

//6.

console.log('Start'); //1

Promise.resolve().then(() => {
  console.log('Promise 1'); //3
  return Promise.resolve('Promise 2').then((value) => {
    console.log(value); //5 -> Promise 2
    return Promise.resolve('Promise 3');
  });
}).then((value) => {
  console.log(value); //6 -> Promise 3
});

Promise.resolve().then(() => {
  console.log('Promise 4'); //4
});

console.log('End'); //2

//7.

console.log('First'); //1

Promise.resolve().then(() => {
  console.log('Second'); //3
  return Promise.resolve().then(() => {
    console.log('Third'); //4
    return Promise.resolve().then(() => {
      console.log('Fourth'); //5
      return Promise.resolve('Fifth');
    });
  }).then((value) => {
    console.log(value); //6 -> Fifth
  });
}).then(() => {
  console.log('Sixth'); //7
});

console.log('Seventh'); //2

//8.
console.log('Main'); //1

Promise.resolve().then(() => {
  console.log('Step 1'); //3
  return Promise.resolve('Step 2').then((value) => {
    console.log(value); //4 -> Step 2
    return Promise.resolve('Step 3').then(() => {
      console.log('Step 4'); //5
      return Promise.resolve('Step 5');
    });
  }).then((value) => {
    console.log(value); //6 -> Step 5
  });
}).then(() => {
  console.log('Step 6'); //7
});

console.log('Final'); //2

//9.
console.log('Start'); //1

Promise.resolve().then(() => {
  console.log('Promise A'); //2
  return Promise.resolve().then(() => {
    console.log('Promise B'); //3
    return Promise.resolve().then(() => {
      console.log('Promise C'); //4
      return Promise.resolve().then(() => {
        console.log('Promise D'); //5
      });
    }).then(() => {
      console.log('Promise E'); //6
    });
  }).then(() => {
    console.log('Promise F'); //7
  });
}).then(() => {
  console.log('Promise G'); //8
});

console.log('End');//2

//10.
console.log('Start'); //1

Promise.resolve().then(() => {
  console.log('Promise A'); //3
  return Promise.resolve('Promise B').then((value) => {
    console.log(value); //4 -> Promise B
    return Promise.resolve('Promise C').then((value) => {
      console.log(value); //5 -> Promise C
      return Promise.resolve('Promise D').then((value) => {
        console.log(value); //Promise D
        return 'Promise E';
      });
    });
  });
}).then((value) => {
  console.log(value); //Promise E
});

console.log('End'); //2