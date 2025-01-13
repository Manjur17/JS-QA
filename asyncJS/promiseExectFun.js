console.log("begins"); //1

setTimeout(() => {
  console.log("setTimeout 1"); //4
  Promise.resolve().then(() => {
    console.log("promise 1"); //5
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2"); //3
  setTimeout(function () {
    console.log("setTimeout 2"); //6
    resolve("resolve 1"); //7
  }, 0);
}).then((res) => {
    //then will bes pushed when above promised is resolved
  console.log("dot then 1"); //8
  setTimeout(() => {
    console.log(res); //9 -> resolve 1
  }, 0);
});

//------------------------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  reject("Error 1");
}).then(
  () => {
    console.log("Then 1"); // Will it run?
  },
  (err) => {
    console.log("Catch 1:", err); // 5
    return "Recovered 1";
  }
).then((res) => {
  console.log("Then 2:", res); // 7
});

new Promise((resolve, reject) => {
  console.log("Executor 2"); // 3
  resolve("Resolved 2");
}).then((res) => {
  console.log("Then 3:", res); // 6
});

console.log("End"); // 4

//--------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve("Resolved 1");
  resolve("Resolved 2"); //A promise can only be resolved or rejected once. Any subsequent calls to resolve or reject are ignored.
}).then((res) => {
  console.log("Then 1:", res); //4 -> Resolved 1
});

console.log("End"); // 3

//-----------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve();
  setTimeout(() => {
    console.log("Timeout 1"); // 6
  }, 0);
}).then(() => {
  console.log("Then 1"); // 4
  return new Promise((resolve) => {
    console.log("Executor 2"); // 5
    setTimeout(() => {
      resolve("Resolved 1");
    }, 0);
  });
}).then((res) => {
  console.log(res); // 8 -> Resolved 1
});

setTimeout(() => {
  console.log("Timeout 2"); // 7
}, 0);

console.log("End"); // 3

//-------------------------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  setTimeout(() => {
    console.log("Timeout 1"); // 4
    resolve("Resolved 1");
  }, 0);
}).then((res) => {
  console.log("Then 1:", res); // 5 -> Resolved 1
  return new Promise((resolve) => {
    console.log("Executor 2"); // 6
    setTimeout(() => {
      console.log("Timeout 2"); // 7
      resolve("Resolved 2");
    }, 0);
  });
}).then((res) => {
  console.log("Then 2:", res); // 8 -> Resolved 2
});

console.log("End"); // 3

//--------------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  setTimeout(() => {
    console.log("Timeout 1"); // 4
    resolve("Resolved 1");
    setTimeout(() => {
      console.log("Timeout 2"); // 6
    }, 0);
  }, 0);
}).then((res) => {
  console.log("Then 1:", res); // 5 -> Resolved 1
});

console.log("End"); // 3

//------------------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve("Resolved 1");
  reject("Rejected 1");
}).then(
  (res) => {
    console.log("Then 1:", res); // 4 -> Resolved 1
  },
  (err) => {
    console.log("Catch 1:", err); // Will it run?
  }
);

console.log("End"); // 3

//-------------------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  resolve();
}).then(() => {
  console.log("Then 1"); // 4
  return new Promise((resolve, reject) => {
    console.log("Executor 2"); // 5
    reject("Rejected 1");
  });
}).then(() => {
  console.log("Then 2"); // Will it run?
}).catch((err) => {
  console.log("Catch 1:", err); // 7 -> Rejected 1
});

console.log("End"); // 3

//--------------------------------------------------
console.log("Start"); // 1

new Promise((resolve) => {
  console.log("Executor 1"); // 2
  setTimeout(() => {
    console.log("Timeout 1"); // 6
    resolve("Resolved 1");
  }, 0);
}).then((res) => {
  console.log("Then 1:", res); // 7 -> Resolved 1
});

new Promise((resolve) => {
  console.log("Executor 2"); // 3
  resolve("Resolved 2");
}).then((res) => {
  console.log("Then 2:", res); //5 -> Resolved 2
});

setTimeout(() => {
  console.log("Timeout 2"); // 8
}, 0);

console.log("End"); // 4

//---------------------------------------------------
console.log("Start"); // 1

new Promise((resolve, reject) => {
  console.log("Executor 1"); // 2
  reject("Rejected 1");
}).then(
  (res) => {
    console.log("Then 1:", res); // Will it run?
    return "Resolved 2";
  },
  (err) => {
    console.log("Catch 1:", err); // 4
    return "Recovered 1";
  }
).then((res) => {
  console.log("Then 2:", res); // 5
});

console.log("End"); // 3

//-------------------------------------------------
async function async1() {
    console.log("async1 start"); //2
    await async2();
    console.log("async1 end"); //6
  }
  
  async function async2() {
    console.log("async2"); //3
  }
  
  console.log("script start"); //1
  
  setTimeout(function () {
    console.log("setTimeout"); //8
  }, 0);
  
  async1();
  
  new Promise(function (resolve) {
    console.log("promise1"); //4
    resolve();
  }).then(function () {
    console.log("promise2");//7
  });
  
  console.log("script end"); //5