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
console.log('Init');

Promise.resolve().then(() => {
  console.log('Step 1');
  return Promise.resolve('Step 2').then((value) => {
    console.log(value);
    return Promise.resolve('Step 3');
  });
}).then((value) => {
  console.log(value);
  return Promise.resolve('Step 4').then((value) => {
    console.log(value);
  });
});

console.log('Final');

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
console.log('A');

Promise.resolve().then(() => {
  console.log('B');
  return Promise.resolve().then(() => {
    console.log('C');
    return Promise.resolve().then(() => {
      console.log('D');
    });
  }).then(() => {
    console.log('E');
  });
}).then(() => {
  console.log('F');
});

console.log('G');

//5.
console.log('Alpha');

Promise.resolve().then(() => {
  console.log('Beta');
  return Promise.resolve().then(() => {
    console.log('Gamma');
    return Promise.resolve().then(() => {
      console.log('Delta');
      return Promise.resolve('Epsilon');
    });
  });
}).then((value) => {
  console.log(value);
});

console.log('Omega');

//6.

console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise 1');
  return Promise.resolve('Promise 2').then((value) => {
    console.log(value);
    return Promise.resolve('Promise 3');
  });
}).then((value) => {
  console.log(value);
});

Promise.resolve().then(() => {
  console.log('Promise 4');
});

console.log('End');

//7.

console.log('First');

Promise.resolve().then(() => {
  console.log('Second');
  return Promise.resolve().then(() => {
    console.log('Third');
    return Promise.resolve().then(() => {
      console.log('Fourth');
      return Promise.resolve('Fifth');
    });
  }).then((value) => {
    console.log(value);
  });
}).then(() => {
  console.log('Sixth');
});

console.log('Seventh');

//8.
console.log('Main');

Promise.resolve().then(() => {
  console.log('Step 1');
  return Promise.resolve('Step 2').then((value) => {
    console.log(value);
    return Promise.resolve('Step 3').then(() => {
      console.log('Step 4');
      return Promise.resolve('Step 5');
    });
  }).then((value) => {
    console.log(value);
  });
}).then(() => {
  console.log('Step 6');
});

console.log('Final');

//9.
console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise A');
  return Promise.resolve().then(() => {
    console.log('Promise B');
    return Promise.resolve().then(() => {
      console.log('Promise C');
      return Promise.resolve().then(() => {
        console.log('Promise D');
      });
    }).then(() => {
      console.log('Promise E');
    });
  }).then(() => {
    console.log('Promise F');
  });
}).then(() => {
  console.log('Promise G');
});

console.log('End');

//10.
console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise A');
  return Promise.resolve('Promise B').then((value) => {
    console.log(value);
    return Promise.resolve('Promise C').then((value) => {
      console.log(value);
      return Promise.resolve('Promise D').then((value) => {
        console.log(value);
        return 'Promise E';
      });
    });
  });
}).then((value) => {
  console.log(value);
});

console.log('End');